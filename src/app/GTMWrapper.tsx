'use client';
import { GoogleTagManager } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { i18n } from '../../i18n-config';

export default function GTMWrapper() {
  const pathname = usePathname();

  const localePattern = new RegExp(`^/(${i18n.locales.join('|')})`);
  const validLocale = localePattern.test(pathname);

  if (!validLocale) return null;

  return <GoogleTagManager gtmId='GTM-N85RFB29' />;
}
