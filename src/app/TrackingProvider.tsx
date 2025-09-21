'use client';

import { pageviewFB } from '@/lib/fbpixel/fbpixel';
import { pageviewGTM } from '@/lib/gtm/gtm';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function TrackingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageviewFB();
      pageviewGTM(pathname);
    }
  }, [pathname]);

  return <>{children}</>;
}
