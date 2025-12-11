/* eslint-disable @typescript-eslint/no-explicit-any */

import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';

import { LocalePageProps } from '../destination/page';
import SectionGrid from '@/components/home/sectionGrid';
import ContactUsForm from './ContactUsForm';
import { Locale } from '../../../../i18n-config';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';

export default async function MeetingsEvents({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('meetings-and-event', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.timelessMomentstext?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.timelessMomentstext?.subtitle}
          title={data?.timelessMomentstext?.title}
          description={data?.timelessMomentstext?.description}
          buttonText={data?.timelessMomentstext?.buttonText}
          buttonUrl={data?.timelessMomentstext?.buttonUrl}
          newTab={data?.timelessMomentstext?.newTab}
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
        sectionGridSlider={(data?.sectionGridSlider ?? []).filter(
          (item: any) => !item?.hideThisBlock,
        )}
      />
      {!data?.contactUsText?.hideThisBlock && (
        <SectionHeader
          title={data?.contactUsText?.title}
          description={data?.contactUsText?.description}
          buttonText={data?.contactUsText?.buttonText}
          buttonUrl={data?.contactUsText?.buttonUrl}
          newTab={data?.contactUsText?.newTab}
          id=''
        />
      )}
      <ContactUsForm data={data} locale={locale as Locale} />

      <div className='h-12.5' />
    </>
  );
}
