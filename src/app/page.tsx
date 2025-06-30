'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, type Locale } from '../../i18n-config';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Get browser language with fallback
    const browserLang =
      typeof navigator !== 'undefined'
        ? navigator.language
        : i18n.defaultLocale;

    const langCode = browserLang.split('-')[0];

    // Type-safe check: is langCode a valid Locale?
    const isValidLocale = (locale: string): locale is Locale => {
      return i18n.locales.includes(locale as Locale);
    };

    const preferredLocale: Locale = isValidLocale(langCode)
      ? langCode
      : i18n.defaultLocale;

    router.replace(`/${preferredLocale}`);
  }, [router]);

  // Show loading state instead of null
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}
