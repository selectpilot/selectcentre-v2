// Analytics component for Google Analytics and Facebook Pixel
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics
export const initGA = (measurementId) => {
  // Google Analytics gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: false // We'll send page views manually
  });
};

export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Facebook Pixel
export const initFacebookPixel = (pixelId) => {
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

export const trackFacebookEvent = (eventName, parameters = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Main Analytics component
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics on component mount
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID;

    if (gaId) {
      initGA(gaId);
    }

    if (fbPixelId) {
      initFacebookPixel(fbPixelId);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname);
    
    // Track Facebook page view on route changes
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

export default Analytics;