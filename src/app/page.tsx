'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, type Locale } from '../../i18n-config';

export default function RootRedirect() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const browserLang = navigator.language;
    const langCode = browserLang.split('-')[0];

    const isValidLocale = (locale: string): locale is Locale =>
      i18n.locales.includes(locale as Locale);

    const preferredLocale: Locale = isValidLocale(langCode)
      ? langCode
      : i18n.defaultLocale;

    router.replace(`/${preferredLocale}`);
  }, [router]);

  if (!mounted) return null;

  return null;
}
