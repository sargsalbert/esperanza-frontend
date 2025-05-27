'use client';

import { useEffect } from 'react';

export const useViewportHeight = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR safe

    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setVh, 150); // debounce resize
    };

    setVh();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', setVh);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);
};
