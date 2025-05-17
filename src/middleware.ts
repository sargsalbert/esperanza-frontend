import { NextRequest, NextResponse } from 'next/server';
import { i18n } from '../i18n-config';

export const config = {
  matcher: [
    // Match all paths except those starting with:
    // - /api
    // - /_next
    // - /favicon.ico
    // - /images
    // - /fonts
    // - any file in the root (e.g., /AA.png)
    // '/((?!api|_next|favicon.ico|[\\w-]+\\.\\w+).*)',
    '/((?!api|_next|favicon.ico|images|fonts|.well-known|[\\w-]+\\.\\w+).*)',
  ],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('➡️ Middleware hit:', pathname);

  // Skip if already localized
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Get user's preferred locale or fallback
  const locale =
    request.cookies.get('NEXT_LOCALE')?.value || i18n.defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}
