'use client';

import { useEffect, useState } from 'react';

export const useIsMobile = (): boolean | null => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => {
      mediaQuery.removeEventListener('change', updateIsMobile);
    };
  }, []);

  return isMobile;
};
