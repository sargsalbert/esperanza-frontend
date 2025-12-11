/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocalePageProps } from '../destination/page';
import SectionHeader from '@/components/shared/SectionHeader';
import { DynamicGallery } from './DynamicGallery';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';

export default async function Gallery({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('gallery', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.sectionText?.hideThisBlock && (
        <div className='mt-7.5 lg:mt-11 xl:mt-10.5'>
          <SectionHeader
            subtitle={data?.sectionText?.subtitle}
            title={data?.sectionText?.title}
            description={data?.sectionText?.description}
            buttonText={data?.sectionText?.buttonText}
            buttonUrl={data?.sectionText?.buttonUrl}
            newTab={data?.sectionText?.newTab}
            id=''
          />
        </div>
      )}

      <DynamicGallery
        images={
          data?.galleryImages?.multipleImages?.filter(
            (img: any) => img !== null,
          ) ?? []
        }
      />
    </>
  );
}
