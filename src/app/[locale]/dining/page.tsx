import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { DiningQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { DINING_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<DiningQuery>(DINING_QUERY, params, (data) => ({
    title: data.dining?.seo?.metaTitle,
    description: data.dining?.seo?.metaDescription,
    image: data.dining?.seo?.shareImage?.url,
  }));
}

export default async function Villas({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<DiningQuery>(DINING_QUERY, { locale });

  return (
    <>
      <PageHeader
        heroImage={data.dining?.heroSection?.heroImage}
        title={data.dining?.heroSection?.heroText}
      />
      {!data.dining?.beyondTableText?.hideThisBlock && (
        <SectionHeader
          subtitle={data.dining?.beyondTableText?.subtitle}
          title={data.dining?.beyondTableText?.title}
          description={data.dining?.beyondTableText?.description}
          buttonText={data.dining?.beyondTableText?.buttonText}
          buttonUrl={data.dining?.beyondTableText?.buttonUrl}
          newTab={data.dining?.beyondTableText?.newTab}
          id=''
        />
      )}

      {(data.dining?.tabbedSliderBlock ?? [])
        .filter((d) => !d?.hideThisBlock)
        .map((d, index, arr) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <ImageWithCard
              title={d?.title}
              tabItem={d?.tabItem}
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
