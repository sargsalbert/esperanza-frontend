'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, type Locale } from '../../i18n-config';
import { LogoIcon } from '@/components/icons/logoIcon';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const browserLang =
      typeof navigator !== 'undefined'
        ? navigator.language
        : i18n.defaultLocale;

    const langCode = browserLang.split('-')[0];

    const preferredLocale: Locale = i18n.locales.includes(langCode as Locale)
      ? (langCode as Locale)
      : i18n.defaultLocale;

    // Redirect only if not already on locale route
    if (!window.location.pathname.startsWith(`/${preferredLocale}`)) {
      router.replace(`/${preferredLocale}`);
    }
  }, [router]);

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <LogoIcon className='h-[52px] w-[131px] md:h-[71px] md:w-[179px] 2xl:h-[79px] 2xl:w-[199px]' />
      </div>
    </div>
  );
}
