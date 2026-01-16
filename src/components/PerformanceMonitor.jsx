// Performance monitoring and optimization utilities
import { useEffect } from 'react';

// Core Web Vitals monitoring
export const trackWebVitals = () => {
  // Lazy load web-vitals library
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  });
};

const sendToAnalytics = ({ name, delta, value, id }) => {
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      non_interaction: true,
    });
  }
  
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`${name}: ${value}`);
  }
};

// Image lazy loading observer
export const createImageObserver = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => imageObserver.observe(img));

    return imageObserver;
  }
  return null;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalFonts = [
    '/fonts/inter-regular.woff2',
    '/fonts/inter-medium.woff2',
    '/fonts/inter-semibold.woff2'
  ];

  const criticalImages = [
    '/hero-background.jpg',
    '/logo.svg'
  ];

  // Preload fonts
  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });

  // Preload critical images
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Performance monitoring component
const PerformanceMonitor = () => {
  useEffect(() => {
    // Track Core Web Vitals
    trackWebVitals();

    // Set up image lazy loading
    const imageObserver = createImageObserver();

    // Preload critical resources
    preloadCriticalResources();

    // Performance budget monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Monitor long tasks (blocking the main thread for >50ms)
          if (entry.entryType === 'longtask') {
            console.warn('Long task detected:', entry.duration);
            if (window.gtag) {
              window.gtag('event', 'long_task', {
                event_category: 'Performance',
                event_label: 'Main Thread Blocking',
                value: Math.round(entry.duration)
              });
            }
          }

          // Monitor layout shifts
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            if (window.gtag) {
              window.gtag('event', 'layout_shift', {
                event_category: 'Performance',
                event_label: 'Cumulative Layout Shift',
                value: Math.round(entry.value * 1000)
              });
            }
          }
        });
      });

      // Observe performance entries
      try {
        observer.observe({ entryTypes: ['longtask', 'layout-shift'] });
      } catch (e) {
        // Handle browsers that don't support certain entry types
        console.warn('Some performance observers not supported:', e);
      }

      return () => {
        observer.disconnect();
        if (imageObserver) {
          imageObserver.disconnect();
        }
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;