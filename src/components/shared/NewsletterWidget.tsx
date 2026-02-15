'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

export default function NewsletterWidget() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? 'en';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cleanup = () => {
      const existingScript = document.querySelector(
        'script[data-xp-widget-newsletter-489]',
      );
      if (existingScript) existingScript.remove();
      if (container) container.innerHTML = '';
    };

    cleanup();

    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src =
        'https://widgets.experience-hotel.com/front/widget/widget-newsletter/bootstrap.js?widget_id=489';
      script.setAttribute('data-xp-widget-newsletter-489', '');
      script.async = true;

      document.body.appendChild(script);
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [locale]);

  return (
    <div ref={containerRef} data-xp-widget-newsletter-489 data-lang={locale} />
  );
}
