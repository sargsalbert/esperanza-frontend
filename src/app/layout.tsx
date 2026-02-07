/* eslint-disable @next/next/no-img-element */
// import Script from 'next/script';
// import { GoogleAnalytics } from '@next/third-parties/google';
// import { FB_PIXEL_ID } from '@/lib/fbpixel/fbpixel';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Google Tag Manager (HEAD script) */}
        {/* <Script id='gtm-head' strategy='afterInteractive'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PM8J9TMP');
          `}
        </Script> */}

        {/* Google Ads (gtag.js) */}
        {/* <Script
          src='https://www.googletagmanager.com/gtag/js?id=AW-17528734611'
          strategy='afterInteractive'
        />
        <Script id='google-ads' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17528734611');
          `}
        </Script> */}

        {/* Facebook Pixel */}
        {/* {FB_PIXEL_ID && (
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
        )} */}
      </head>

      <body suppressHydrationWarning>
        {/* GTM noscript (MUST be the first element in <body>) */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM8J9TMP"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        /> */}

        {children}

        {/* Google Analytics */}
        {/* <GoogleAnalytics gaId='G-CR699031L4' /> */}

        {/* FB Pixel fallback */}
        {/* {FB_PIXEL_ID && (
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=''
            />
          </noscript>
        )} */}
      </body>
    </html>
  );
}
