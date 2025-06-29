'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

type FadeInOnViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional: delay for animation
};

const FadeInOnView: React.FC<FadeInOnViewProps> = ({
  children,
  className = '',
  delay = 100,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative z-1 transform transition-all duration-800 ease-in-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;
