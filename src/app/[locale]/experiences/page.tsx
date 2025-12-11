/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionGrid from '@/components/home/sectionGrid';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { LocalePageProps } from '../destination/page';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';

export default async function Experiences({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('experience', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.exploreEsperanzaText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.exploreEsperanzaText?.subtitle}
          title={data?.exploreEsperanzaText?.title}
          description={data?.exploreEsperanzaText?.description}
          buttonText={data?.exploreEsperanzaText?.buttonText}
          buttonUrl={data?.exploreEsperanzaText?.buttonUrl}
          newTab={data?.exploreEsperanzaText?.newTab}
          id=''
        />
      )}
      {(data.experience?.tabbedSliderBlock ?? [])
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

      <SectionGrid
        sectionGridSlider={(data.experience?.sectionGridSlider ?? []).filter(
          (item: any) => !item?.hideThisBlock,
        )}
      />

      <div className='h-12.5' />
    </>
  );
}
