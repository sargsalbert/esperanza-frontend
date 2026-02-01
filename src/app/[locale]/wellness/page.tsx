/* eslint-disable @typescript-eslint/no-explicit-any */

import SectionGrid from '@/components/home/sectionGrid';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { LocalePageProps } from '../destination/page';
import ImageGridTree from '@/components/home/imageGridTree';
import { notFound } from 'next/navigation';
import ModalOffer from '@/components/home/modalOffer';
import { fetchStrapiData } from '@/lib/fetchStrapiData';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  return generateSeoMetadata('wellness', params, (data: any) => ({
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
    canonicalUrl: `/${locale}/wellness/`,
  }));
}

export default async function Wellness({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('wellness', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}

      {!data?.ritualRenewalText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.ritualRenewalText?.subtitle}
          title={data?.ritualRenewalText?.title}
          description={data?.ritualRenewalText?.description}
          buttonText={data?.ritualRenewalText?.buttonText}
          buttonUrl={data?.ritualRenewalText?.buttonUrl}
          newTab={data?.ritualRenewalText?.newTab}
          id=''
        />
      )}

      {data?.ritualRenewalImages && (
        <ImageGridTree
          images={
            data?.ritualRenewalImages?.multipleImages?.filter(
              (img: any) => img !== null,
            ) ?? []
          }
        />
      )}
      {!data?.facilitiesText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.facilitiesText?.subtitle}
          title={data?.facilitiesText?.title}
          description={data?.facilitiesText?.description}
          buttonText={data?.facilitiesText?.buttonText}
          buttonUrl={data?.facilitiesText?.buttonUrl}
          newTab={data?.facilitiesText?.newTab}
          id=''
        />
      )}
      <SectionGrid
        sectionGridSlider={(data?.sectionGridSlider ?? []).filter(
          (item: any) => !item?.hideThisBlock,
        )}
      />

      {(data?.tabbedSliderBlock ?? [])
        .filter((d: any) => !d?.hideThisBlock)
        .map((d: any, index: any, arr: any) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <ImageWithCard
              title={d?.title}
              tabItem={d?.tabItem}
              infoLineText={d?.infoLineText}
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
