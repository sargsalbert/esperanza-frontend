/* eslint-disable @typescript-eslint/no-explicit-any */
export const pageviewGTM = (url: string) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'pageview',
      page_path: url,
    });
  }
};
