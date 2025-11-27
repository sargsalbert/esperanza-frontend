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

    // If at root — redirect to locale root (/en/)
    if (currentPath === '/') {
      window.location.replace(`/${preferredLocale}/`);
      return;
    }

    // If path starts with locale but missing trailing slash — add it
    const matchedLocale = i18n.locales.find(
      (loc) =>
        currentPath === `/${loc}` ||
        currentPath.startsWith(`/${loc}/`) ||
        currentPath.startsWith(`/${loc}`),
    );

    if (matchedLocale) {
      if (!currentPath.endsWith('/')) {
        // preserve query and hash
        const { search, hash } = window.location;
        window.location.replace(`${currentPath}/${search}${hash}`);
      }
      return;
    }

    // If not on locale path, redirect to preferred locale root
    const isAlreadyRedirected = i18n.locales.some((loc) =>
      currentPath.startsWith(`/${loc}`),
    );

    if (!isAlreadyRedirected) {
      window.location.replace(`/${preferredLocale}/`);
    }
  }, []);

  return null;
}
