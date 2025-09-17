import { GoogleAnalytics } from '@next/third-parties/google';
import NoscriptRedirect from './NoscriptRedirect';
import GTMWrapper from './GTMWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <NoscriptRedirect />
        <GTMWrapper />
      </head>
      <body suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId='G-CR699031L4' />
      </body>
    </html>
  );
}
