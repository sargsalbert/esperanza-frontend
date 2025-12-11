/* eslint-disable @typescript-eslint/no-explicit-any */

import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { LocalePageProps } from '../destination/page';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';

export default async function VillaPage({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('villa', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.privateHeavensText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.privateHeavensText?.subtitle}
          title={data?.privateHeavensText?.title}
          description={data?.privateHeavensText?.description}
          buttonText={data?.privateHeavensText?.buttonText}
          buttonUrl={data?.privateHeavensText?.buttonUrl}
          newTab={data?.privateHeavensText?.newTab}
          id=''
        />
      )}
      {data?.tabbedSliderBlock
        ?.filter((item: any) => !item?.hideThisBlock)
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

      <div className='h-12.5' />
    </>
  );
}
