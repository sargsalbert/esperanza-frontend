/* eslint-disable @typescript-eslint/no-explicit-any */

import SectionHeader from '@/components/shared/SectionHeader';
import SectionGrid from '@/components/home/sectionGrid';
import ImageWithOverlayCard from '@/components/home/imageWithOverlayCard';
import { LocalePageProps } from './destination/page';
import ImageGridTree from '@/components/home/imageGridTree';
import TopBox from '@/components/home/topBox';
import { Locale } from '../../../i18n-config';
import { notFound } from 'next/navigation';
import ModalOffer from '@/components/home/modalOffer';
import { fetchStrapiData } from '@/lib/fetchStrapiData';

export default async function Home({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('home', locale);

  if (!data) return notFound();

  return (
    <>
      <TopBox
        heroSection={data?.heroSection}
        bookingWidget={data?.bookingWidget}
        locale={locale as Locale}
      />

      {!data?.destinationText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.destinationText?.subtitle}
          title={data?.destinationText?.title}
          description={data?.destinationText?.description}
          buttonText={data?.destinationText?.buttonText}
          buttonUrl={data?.destinationText?.buttonUrl}
          newTab={data?.destinationText?.newTab}
          id=''
        />
      )}

      {data?.destinationImages && (
        <ImageGridTree
          images={
            data?.destinationImages?.multipleImages?.filter(
              (img: any) => img !== null,
            ) ?? []
          }
        />
      )}

      {data?.headerTextWithSliderBlock?.length &&
        data.headerTextWithSliderBlock.map((d: any, index: any) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            {!d?.sectionText?.hideThisBlock && (
              <SectionHeader
                subtitle={d?.sectionText?.subtitle}
                title={d?.sectionText?.title}
                description={d?.sectionText?.description}
                buttonText={d?.sectionText?.buttonText}
                buttonUrl={d?.sectionText?.buttonUrl}
                newTab={d?.sectionText?.newTab}
                id=''
              />
            )}
            <ImageWithOverlayCard
              features={(d?.textImageSliderBlock ?? []).filter(
                (item: any) => !item?.hideThisBlock,
              )}
              imageFirst={index % 2 !== 0}
            />
          </div>
        ))}
      {!data?.wellnessText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.wellnessText?.subtitle}
          title={data?.wellnessText?.title}
          description={data?.wellnessText?.description}
          buttonText={data?.wellnessText?.buttonText}
          buttonUrl={data?.wellnessText?.buttonUrl}
          newTab={data?.wellnessText?.newTab}
          id=''
        />
      )}

      <SectionGrid
        sectionGridSlider={(data?.wellnessGridSlider ?? []).filter(
          (item: any) => !item?.hideThisBlock,
        )}
      />

      {data?.HeaderTextWithSliderBlockTwo?.length &&
        data.HeaderTextWithSliderBlockTwo.map((d: any, index: any) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            {!d?.sectionText?.hideThisBlock && (
              <SectionHeader
                subtitle={d?.sectionText?.subtitle}
                title={d?.sectionText?.title}
                description={d?.sectionText?.description}
                buttonText={d?.sectionText?.buttonText}
                buttonUrl={d?.sectionText?.buttonUrl}
                newTab={d?.sectionText?.newTab}
                id=''
              />
            )}

            <ImageWithOverlayCard
              features={(d?.textImageSliderBlock ?? []).filter(
                (item: any) => !item?.hideThisBlock,
              )}
              imageFirst={index % 2 !== 0}
            />
          </div>
        ))}
      {!data?.experiencesText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.experiencesText?.subtitle}
          title={data?.experiencesText?.title}
          description={data?.experiencesText?.description}
          buttonText={data?.experiencesText?.buttonText}
          buttonUrl={data?.experiencesText?.buttonUrl}
          newTab={data?.experiencesText?.newTab}
          id=''
        />
      )}
      <SectionGrid
        sectionGridSlider={(data?.experiencesGridSlider ?? []).filter(
          (item: any) => !item?.hideThisBlock,
        )}
      />

      {!data?.infoSectionText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.infoSectionText?.subtitle}
          title={data?.infoSectionText?.title}
          description={data?.infoSectionText?.description}
          buttonText={data?.infoSectionText?.buttonText}
          buttonUrl={data?.infoSectionText?.buttonUrl}
          newTab={data?.infoSectionText?.newTab}
          id=''
        />
      )}
      <SectionGrid
        sectionGridSlider={(data?.infoSectionGridSlider ?? []).filter(
          (item: any) => !item?.hideThisBlock,
        )}
      />

      <ModalOffer dataModal={data?.modal} />

      <div className='h-12.5' />
    </>
  );
}
