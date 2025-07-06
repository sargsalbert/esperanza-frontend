import { VillaQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { VILLA_QUERY } from '@/lib/graphql/queries';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { LocalePageProps } from '../destination/page';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<VillaQuery>(VILLA_QUERY, params, (data) => ({
    title: data.villa?.seo?.metaTitle,
    description: data.villa?.seo?.metaDescription,
    image: data.villa?.seo?.shareImage?.url,
  }));
}

export default async function VillaPage({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<VillaQuery>(VILLA_QUERY, { locale });

  return (
    <>
      <PageHeader
        heroImage={data.villa?.heroSection?.heroImage}
        title={data.villa?.heroSection?.heroText}
      />
      {!data.villa?.privateHeavensText?.hideThisBlock && (
        <SectionHeader
          subtitle={data.villa?.privateHeavensText?.subtitle}
          title={data.villa?.privateHeavensText?.title}
          description={data.villa?.privateHeavensText?.description}
          buttonText={data.villa?.privateHeavensText?.buttonText}
          buttonUrl={data.villa?.privateHeavensText?.buttonUrl}
          newTab={data.villa?.privateHeavensText?.newTab}
          id=''
        />
      )}
      {data.villa?.tabbedSliderBlock
        ?.filter((item) => !item?.hideThisBlock)
        .map((d, index, arr) => (
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
