'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type AnchorProps = React.ComponentProps<'a'>;

interface LocaleLinkProps extends AnchorProps {
  href: string;
}

const LocaleLink: React.FC<LocaleLinkProps> = ({ href, children, ...rest }) => {
  const pathname = usePathname();
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  if (isExternal) {
    return (
      <a
        href={href}
        rel={rest.target === '_blank' ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const currentLocale = pathname.split('/')[1];
  const fullHref = `/${currentLocale}${href.startsWith('/') ? href : `/${href}`}`;

  return (
    <Link href={fullHref} {...rest}>
      {children}
    </Link>
  );
};

export default LocaleLink;
