/* eslint-disable @next/next/no-img-element */
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import { FB_PIXEL_ID } from '@/lib/fbpixel/fbpixel';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId='GTM-N85RFB29' />

        {/* Facebook Pixel init */}
        {FB_PIXEL_ID && (
          <Script
            id='facebook-pixel'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning>
        {/* Redirect if JS disabled */}
        <noscript>
          <meta httpEquiv='refresh' content='0;url=/en' />
        </noscript>

        {children}

        {/* Google Analytics */}
        <GoogleAnalytics gaId='G-CR699031L4' />

        {/* FB Pixel fallback */}
        {FB_PIXEL_ID && (
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=''
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
