'use client';

import Head from 'next/head';

export default function NoscriptRedirect() {
  return (
    <Head>
      <noscript>
        <meta httpEquiv='refresh' content='0;url=/en' />
      </noscript>
    </Head>
  );
}
