'use client';

import { useEffect } from 'react';
import { i18n, type Locale } from '../../i18n-config';

export default function RootRedirect() {
  useEffect(() => {
    if (typeof window === 'undefined' || !navigator.language) return;

    const browserLang = navigator.language;
    const langCode = browserLang.split('-')[0];

    const preferredLocale: Locale = i18n.locales.includes(langCode as Locale)
      ? (langCode as Locale)
      : i18n.defaultLocale;

    const currentPath = window.location.pathname;

    // Redirect only if not already on a locale path
    const isAlreadyRedirected = i18n.locales.some((loc) =>
      currentPath.startsWith(`/${loc}`),
    );

    if (!isAlreadyRedirected) {
      // Add trailing slash
      window.location.replace(`/${preferredLocale}/`);
    }
  }, []);

  return null;
}
