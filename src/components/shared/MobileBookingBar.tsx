'use client';

import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LocaleLink from './LocaleLink';
import { useIsMobile } from '@/hooks/useIsMobile';

/* eslint-disable @typescript-eslint/no-explicit-any */

type MobileBookingBarProps = {
  global: any;
};

export function MobileBookingBar({ global }: MobileBookingBarProps) {
  const pathname = usePathname();
  const params = useParams();

  const isMobile = useIsMobile();

  const locale = params?.locale as string;

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isMobile || !isHomePage) {
      if (!isHomePage) setIsVisible(true);
      return;
    }

    setIsVisible(false);

    const handleScroll = () => {
      const element = document.getElementById('booking-widget-container');

      if (element) {
        const elementRect = element.getBoundingClientRect();
        if (elementRect.bottom < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        if (window.scrollY > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isMobile]);

  if (!isMobile || !isVisible) return null;

  return (
    <div className='sticky bottom-0 z-31 block w-full bg-gray-100 px-5 py-2.5 md:px-7.5 lg:hidden'>
      <LocaleLink
        href={global?.bookButton?.buttonUrl || ''}
        target={global?.bookButton?.newTab ? '_blank' : undefined}
        className='flex min-h-9 cursor-pointer items-center justify-center rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 md:min-h-10.5 md:min-w-38 md:text-base 2xl:min-h-11 2xl:min-w-48 2xl:text-lg'
      >
        {global?.bookButton?.buttonText}
      </LocaleLink>
    </div>
  );
}
