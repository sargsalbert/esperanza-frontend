'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: boolean;
};

export default function LocaleLink({
  href,
  children,
  className,
  target,
}: Props) {
  const pathname = usePathname();
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target ? '_blank' : '_self'}
        rel='noopener noreferrer'
      >
        {children}
      </a>
    );
  }

  // Get current locale from the URL
  const currentLocale = pathname.split('/')[1]; // Assumes format like /en/about

  // Build localized href
  const fullHref = `/${currentLocale}${href.startsWith('/') ? href : `/${href}`}`;

  return (
    <Link
      href={fullHref}
      className={className}
      target={target ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
}
