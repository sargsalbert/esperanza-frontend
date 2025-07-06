import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { GiftCardQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { GIFTCARD_QUERY } from '@/lib/graphql/queries';
import GiftForm from './GiftForm';
import { LocalePageProps } from '../destination/page';
import StrapiRichTextRenderer from '@/components/shared/StrapiRichTextRenderer';
import FadeInOnView from '@/components/shared/FadeInOnView';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';
import { Locale } from '../../../../i18n-config';
import { Suspense } from 'react';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<GiftCardQuery>(GIFTCARD_QUERY, params, (data) => ({
    title: data.giftCard?.seo?.metaTitle,
    description: data.giftCard?.seo?.metaDescription,
    image: data.giftCard?.seo?.shareImage?.url,
  }));
}

export default async function GiftCards({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<GiftCardQuery>(GIFTCARD_QUERY, { locale });

  return (
    <>
      <PageHeader
        heroImage={data.giftCard?.heroSection?.heroImage}
        title={data.giftCard?.heroSection?.heroText}
      />
      {!data.giftCard?.quietLuxuryText?.hideThisBlock && (
        <SectionHeader
          subtitle={data.giftCard?.quietLuxuryText?.subtitle}
          title={data.giftCard?.quietLuxuryText?.title}
          description={data.giftCard?.quietLuxuryText?.description}
          buttonText={data.giftCard?.quietLuxuryText?.buttonText}
          buttonUrl={data.giftCard?.quietLuxuryText?.buttonUrl}
          newTab={data.giftCard?.quietLuxuryText?.newTab}
          id=''
        />
      )}
      <FadeInOnView className='mb-12.5 sm:mb-15 lg:mb-20'>
        <Suspense fallback={<div>Loading...</div>}>
          <GiftForm data={data} locale={locale as Locale} />
        </Suspense>

        {data.giftCard?.formBottomNote && (
          <div className='mt-5 px-5 sm:mt-7.5 md:px-7.5 lg:mt-10 lg:px-[25%]'>
            <StrapiRichTextRenderer
              content={data.giftCard?.formBottomNote}
              textCenter={true}
            />
          </div>
        )}
      </FadeInOnView>

      <div className='h-12.5' />
    </>
  );
}
