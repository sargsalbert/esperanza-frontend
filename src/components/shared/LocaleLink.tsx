'use client';

import { addTrackingParams } from '@/lib/addTrackingParams';
import { trackConversion } from '@/lib/tracking';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type AnchorProps = React.ComponentProps<'a'>;

interface LocaleLinkProps extends AnchorProps {
  href: string;
  buttonLocation?: string;
}

const LocaleLink: React.FC<LocaleLinkProps> = ({
  href,
  children,
  buttonLocation,
  onClick,
  ...rest
}) => {
  const pathname = usePathname();
  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:');

  const isBookingLink = href.includes('synxis') || href.includes('be.synxis');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (isBookingLink && typeof window !== 'undefined') {
      e.preventDefault();

      const trackingUrl = addTrackingParams(href);

      trackConversion({
        buttonText: typeof children === 'string' ? children : '',
        buttonLocation: buttonLocation || '',
        destinationUrl: trackingUrl,
      });

      if (rest.target === '_blank') {
        window.open(trackingUrl, '_blank');
      } else {
        window.location.href = trackingUrl;
      }
    }
  };

  if (isExternal) {
    const externalUrl = addTrackingParams(href);

    return (
      <a
        {...rest}
        href={externalUrl}
        rel={rest.target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  const currentLocale = pathname.split('/')[1];
  const fullHref = `/${currentLocale}${href.startsWith('/') ? href : `/${href}`}`;

  return (
    <Link href={fullHref} prefetch={false} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default LocaleLink;
