import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { FloatingButton } from './Button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <FloatingButton
      icon={ArrowUp}
      onClick={scrollToTop}
      tooltip="Przewiń do góry"
      position="bottom-right"
    />
  );
};

export default ScrollToTop;