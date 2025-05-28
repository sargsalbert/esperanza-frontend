'use client';

import { useEffect } from 'react';

export const useViewportHeight = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set once on load
    setViewportHeight();

    // Only update on orientation change
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    mediaQuery.addEventListener('change', setViewportHeight);

    return () => {
      mediaQuery.removeEventListener('change', setViewportHeight);
    };
  }, []);
};
