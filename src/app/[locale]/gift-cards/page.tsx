import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import GiftForm from './GiftForm';
import { LocalePageProps } from '../destination/page';
import StrapiRichTextRenderer from '@/components/shared/StrapiRichTextRenderer';
import FadeInOnView from '@/components/shared/FadeInOnView';
import { Locale } from '../../../../i18n-config';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';

export default async function GiftCards({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('gift-card', locale);

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}
      {!data?.quietLuxuryText?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.quietLuxuryText?.subtitle}
          title={data?.quietLuxuryText?.title}
          description={data?.quietLuxuryText?.description}
          buttonText={data?.quietLuxuryText?.buttonText}
          buttonUrl={data?.quietLuxuryText?.buttonUrl}
          newTab={data?.quietLuxuryText?.newTab}
          id=''
        />
      )}
      <FadeInOnView className='mb-12.5 sm:mb-15 lg:mb-20'>
        <Suspense fallback={<div>Loading...</div>}>
          <GiftForm data={data} locale={locale as Locale} />
        </Suspense>

        {data?.formBottomNote && (
          <div className='mt-5 px-5 sm:mt-7.5 md:px-7.5 lg:mt-10 lg:px-[25%]'>
            <StrapiRichTextRenderer
              content={data?.formBottomNote}
              textCenter={true}
            />
          </div>
        )}
      </FadeInOnView>

      <div className='h-12.5' />
    </>
  );
}
