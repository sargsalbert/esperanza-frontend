/* eslint-disable @typescript-eslint/no-explicit-any */

import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { LocalePageProps } from '../destination/page';
import FadeInOnView from '@/components/shared/FadeInOnView';
import LocaleLink from '@/components/shared/LocaleLink';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  return generateSeoMetadata('rooms-and-suite', params, (data: any) => ({
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
    canonicalUrl: `/${locale}/rooms-suites/`,
  }));
}

export default async function RoomsSuites({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('rooms-and-suite', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.spacesToBreatheText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.spacesToBreatheText?.subtitle}
          title={data?.spacesToBreatheText?.title}
          description={data?.spacesToBreatheText?.description}
          buttonText={data?.spacesToBreatheText?.buttonText}
          buttonUrl={data?.spacesToBreatheText?.buttonUrl}
          newTab={data?.spacesToBreatheText?.newTab}
          id=''
        />
      )}
      <FadeInOnView>
        <div className='mt-2 mb-7.5 block text-center sm:mt-3 sm:mb-10 lg:hidden'>
          <LocaleLink
            href={data?.bookButtonShowMobile?.buttonUrl || ''}
            target={data?.bookButtonShowMobile?.newTab ? '_blank' : undefined}
            className='inline-flex h-9 min-w-63 cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-medium text-gray-50 md:h-10.5 md:min-w-38'
          >
            {data?.bookButtonShowMobile?.buttonText}
          </LocaleLink>
        </div>
      </FadeInOnView>

      {(data?.tabbedSliderBlock ?? [])
        .filter((d: any) => !d?.hideThisBlock)
        .map((d: any, index: any, arr: any) => (
          <div key={index} className='lg:mb-20'>
            <ImageWithCard
              title={d?.title}
              tabItem={d?.tabItem}
              infoLineText={d?.infoLineText}
              actionButton={d?.actionButton}
              images={d?.images ?? []}
              imageFirst={index % 2 !== 0}
              uiType='collapse'
              isLast={index === arr.length - 1}
              id={''}
            />
          </div>
        ))}

      <div className='h-22.5 lg:h-12.5' />
    </>
  );
}
