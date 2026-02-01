/* eslint-disable @typescript-eslint/no-explicit-any */

import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageGrid from './ImageComponent';
import LocationMap from '@/components/shared/LocationMap';
import FadeInOnView from '@/components/shared/FadeInOnView';
import { notFound } from 'next/navigation';
import ImageGridTree from '@/components/home/imageGridTree';
import { fetchStrapiData } from '@/lib/fetchStrapiData';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  return generateSeoMetadata('destination', params, (data: any) => ({
    title: data?.Seo?.metaTitle,
    description: data?.Seo?.metaDescription,
    image: data?.Seo?.shareImage?.url
      ? {
          url: data.Seo.shareImage.url,
          width: 1200,
          height: 630,
          alt: data?.Seo?.metaTitle,
        }
      : undefined,
    canonicalUrl: `/${locale}/destination/`,
  }));
}

export default async function Destination({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('destination', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.beforeMapText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.beforeMapText?.subtitle}
          title={data?.beforeMapText?.title}
          description={data?.beforeMapText?.description}
          buttonText={data?.beforeMapText?.buttonText}
          buttonUrl={data?.beforeMapText?.buttonUrl}
          newTab={data?.beforeMapText?.newTab}
          id=''
        />
      )}
      <FadeInOnView>
        <div className='overflow-hidden px-5 pb-5 sm:pb-7.5 md:px-7.5 lg:px-[14.5%]'>
          <div className='aspect-3/2 w-full lg:aspect-16/9'>
            <LocationMap />
          </div>
        </div>
      </FadeInOnView>
      {data?.afterMapText && (
        <FadeInOnView>
          <div className='mb-5 px-5 sm:mb-7.5 md:px-7.5 lg:px-[22%]'>
            <p className='text-center text-[14px]/[26px] sm:text-[16px]/[32px]'>
              {data.afterMapText}
            </p>
          </div>
        </FadeInOnView>
      )}

      <div className='mb-12.5 grid grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 lg:px-[14.5%]'>
        {data?.locationImages?.multipleImages?.length
          ? data.locationImages.multipleImages.map((d: any, index: any) => {
              if (!d) return null;
              return (
                <ImageGrid key={d.documentId} index={index} imageData={d} />
              );
            })
          : null}
      </div>

      {!data?.architectureDesignText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.architectureDesignText?.subtitle}
          title={data?.architectureDesignText?.title}
          description={data?.architectureDesignText?.description}
          buttonText={data?.architectureDesignText?.buttonText}
          buttonUrl={data?.architectureDesignText?.buttonUrl}
          newTab={data?.architectureDesignText?.newTab}
          id=''
        />
      )}
      {data?.architectureDesignImages && (
        <ImageGridTree
          images={
            data?.architectureDesignImages?.multipleImages?.filter(
              (img: any) => img !== null,
            ) ?? []
          }
        />
      )}
    </>
  );
}
