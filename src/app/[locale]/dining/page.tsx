/* eslint-disable @typescript-eslint/no-explicit-any */

import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { LocalePageProps } from '../destination/page';
import { notFound } from 'next/navigation';
import ModalOffer from '@/components/home/modalOffer';
import { fetchStrapiData } from '@/lib/fetchStrapiData';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  return generateSeoMetadata('dining', params, (data: any) => ({
    title: data?.seo?.metaTitle,
    description: data?.seo?.metaDescription,
    image: data?.seo?.shareImage?.url
      ? {
          url: data.seo.shareImage.url,
          width: 1200,
          height: 630,
          alt: data?.seo?.metaTitle,
        }
      : undefined,
    canonicalUrl: `/${locale}/dining/`,
  }));
}

export default async function Villas({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('dining', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.beyondTableText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.beyondTableText?.subtitle}
          title={data?.beyondTableText?.title}
          description={data?.beyondTableText?.description}
          buttonText={data?.beyondTableText?.buttonText}
          buttonUrl={data?.beyondTableText?.buttonUrl}
          newTab={data?.beyondTableText?.newTab}
          id=''
        />
      )}

      {(data?.tabbedSliderBlock ?? [])
        .filter((d: any) => !d?.hideThisBlock)
        .map((d: any, index: any, arr: any) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <ImageWithCard
              title={d?.title}
              tabItem={d?.tabItem}
              actionButton={d?.actionButton}
              images={d?.images ?? []}
              imageFirst={index % 2 !== 0}
              isLast={index === arr.length - 1}
              id={''}
            />
          </div>
        ))}

      <ModalOffer dataModal={data?.modal} />

      <div className='h-12.5' />
    </>
  );
}
