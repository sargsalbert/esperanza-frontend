'use client';

import { useEffect } from 'react';

export const useViewportHeight = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set once on load
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Optional: Update only on orientation change (not scroll/resize)
    const handleOrientationChange = () => {
      const newVh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${newVh}px`);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
};
