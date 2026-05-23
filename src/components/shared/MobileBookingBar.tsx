'use client';

import LocaleLink from './LocaleLink';

/* eslint-disable @typescript-eslint/no-explicit-any */

type MobileBookingBarProps = {
  global: any;
};

export function MobileBookingBar({ global }: MobileBookingBarProps) {
  return (
    <div className='sticky bottom-0 z-40 block w-full bg-gray-100 p-2.5 lg:hidden'>
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
