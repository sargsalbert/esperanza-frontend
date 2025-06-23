import { Metadata } from 'next';
import { fetchData } from '@/lib/apolloClient';
import { TypedDocumentNode } from '@apollo/client';
import { LocalePageProps } from '@/app/[locale]/destination/page';

type ExtractedSeo = {
  title?: string;
  description?: string;
  image?: string;
};

export async function generateSeoMetadata<T>(
  query: TypedDocumentNode<T, unknown>,
  params: LocalePageProps['params'],
  extract: (data: T) => ExtractedSeo
): Promise<Metadata> {
  const { locale } = await params;
  const data = await fetchData<T>(query, { locale });

  const { title, description, image } = extract(data);

  return {
    title: title || 'Esperanza',
    description: description || 'Esperanza',
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