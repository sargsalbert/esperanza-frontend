export const addTrackingParams = (url: string) => {
  if (typeof window === 'undefined') return url;

  const currentParams = new URLSearchParams(window.location.search);

  const trackingParams = ['gclid', '_gl', 'gbraid', 'wbraid', 'fbclid'];

  const urlObject = new URL(url);

  trackingParams.forEach((key) => {
    const value = currentParams.get(key) || sessionStorage.getItem(key);

    if (value) {
      urlObject.searchParams.set(key, value);
      sessionStorage.setItem(key, value);
    }
  });

  return urlObject.toString();
};
