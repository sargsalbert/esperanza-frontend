import { cache } from 'react';

export const fetchStrapiData = cache(
  async (endpoint: string, locale: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/${endpoint}/full?locale=${locale}`,
      );

      if (!res.ok) {
        throw new Error(
          `Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`,
        );
      }

      const json = await res.json();

      return json?.data?.[0] ?? null;
    } catch (error) {
      console.error(`[fetchStrapiData] ${endpoint}`, error);
      return null;
    }
  },
);
