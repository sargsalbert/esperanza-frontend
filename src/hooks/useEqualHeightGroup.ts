import { useEffect, useRef, useState } from 'react';

export function useEqualHeightGroup<T extends HTMLElement>() {
  const elementRefs = useRef<(T | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  const calculateHeights = () => {
    requestAnimationFrame(() => {
      const heights = elementRefs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights);
      if (!Number.isNaN(max) && max > 0) {
        setMaxHeight(max);
      }
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      calculateHeights();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    calculateHeights();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return {
    refCallback: (index: number) => (el: T | null) => {
      elementRefs.current[index] = el;
    },
    minHeight: maxHeight ?? undefined,
  };
}
