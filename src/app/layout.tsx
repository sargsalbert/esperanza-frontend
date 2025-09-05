import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import NoscriptRedirect from './NoscriptRedirect';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <NoscriptRedirect />
        <GoogleTagManager gtmId='GTM-N85RFB29' />
      </head>
      <body suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId='G-CR699031L4' />
      </body>
    </html>
  );
}
