import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { GiftCardQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { GIFTCARD_QUERY } from '@/lib/graphql/queries';
import GiftForm from './GiftForm';
import { LocalePageProps } from '../destination/page';
import StrapiRichTextRenderer from '@/components/shared/StrapiRichTextRenderer';

export default async function GiftCards({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<GiftCardQuery>(GIFTCARD_QUERY, { locale });

  return (
    <>
      <PageHeader
        imgUrl={data.giftCard?.heroSection?.heroImage?.url}
        title={data.giftCard?.heroSection?.heroText}
      />

      <SectionHeader
        subtitle={data.giftCard?.quietLuxuryText?.subtitle}
        title={data.giftCard?.quietLuxuryText?.title}
        description={data.giftCard?.quietLuxuryText?.description}
        buttonText={data.giftCard?.quietLuxuryText?.buttonText}
        id=''
      />

      <GiftForm />

      {data.giftCard?.formBottomNote && (
        <div className='mx-auto mb-12.5 max-w-[1160px] px-5 sm:mb-15 md:px-7.5 lg:mb-20 lg:px-10 2xl:px-15'>
          <StrapiRichTextRenderer content={data.giftCard?.formBottomNote} />
        </div>
      )}

      <div className='h-12.5' />
    </>
  );
}
