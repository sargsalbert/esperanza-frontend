import { Metadata } from 'next';
import { LocalePageProps } from '@/app/[locale]/destination/page';
import { fetchStrapiData } from '../fetchStrapiData';

type SeoImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type ExtractedSeo = {
  title?: string;
  description?: string;
  image?: SeoImage;
  canonicalUrl?: string;
};

export async function generateSeoMetadata<T>(
  query: string,
  params: LocalePageProps['params'],
  extract: (data: T) => ExtractedSeo,
): Promise<Metadata> {
  const { locale } = await params;

  const data = await fetchStrapiData(query, locale);

  const { title, description, image, canonicalUrl } = extract(data);

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://esperanzaresort.lt';

  const normalizePath = (path: string) =>
    path.startsWith('/') ? path : `/${path}`;

  const canonical = canonicalUrl
    ? `${base}${normalizePath(canonicalUrl)}`
    : `${base}/${locale}`;

  return {
    title: title,
    description: description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
