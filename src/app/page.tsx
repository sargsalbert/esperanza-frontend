'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, type Locale } from '../../i18n-config';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language; // e.g., "en-US"
    const langCode = browserLang.split('-')[0]; // e.g., "en"

    // Type-safe check: is langCode a valid Locale?
    const isValidLocale = (locale: string): locale is Locale => {
      return i18n.locales.includes(locale as Locale);
    };

    const preferredLocale: Locale = isValidLocale(langCode)
      ? langCode
      : i18n.defaultLocale;

    router.replace(`/${preferredLocale}`);
  }, [router]);

  return null;
}
