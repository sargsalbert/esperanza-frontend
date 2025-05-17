import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { GiftCardQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { GIFTCARD_QUERY } from '@/lib/graphql/queries';
import GiftForm from './GiftForm';
import { LocalePageProps } from '../destination/page';

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
        showKnowMore={false}
        id=''
      />

      <GiftForm />

      <div className='h-12.5' />
    </>
  );
}
