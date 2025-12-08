import { Metadata } from 'next';
import { fetchData } from '@/lib/apolloClient';
import { TypedDocumentNode } from '@apollo/client';
import { LocalePageProps } from '@/app/[locale]/destination/page';

type ExtractedSeo = {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
};

export async function generateSeoMetadata<T>(
  query: TypedDocumentNode<T, unknown>,
  params: LocalePageProps['params'],
  extract: (data: T) => ExtractedSeo,
): Promise<Metadata> {
  const { locale } = await params;
  const data = await fetchData<T>(query, { locale });
  const { title, description, image, canonicalUrl } = extract(data);

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://esperanzaresort.lt';

  const canonical = canonicalUrl
    ? `${base}${canonicalUrl}`
    : `${base}/${locale}`;

  return {
    title: title || 'Esperanza',
    description: description || 'Esperanza',

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
