import { VillaQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { VILLA_QUERY } from '@/lib/graphql/queries';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { LocalePageProps } from '../destination/page';

export default async function VillaPage({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<VillaQuery>(VILLA_QUERY, { locale });

  return (
    <>
      <PageHeader
        imgUrl={data.villa?.heroSection?.heroImage?.url}
        title={data.villa?.heroSection?.heroText}
      />

      <SectionHeader
        subtitle={data.villa?.privateHeavensText?.subtitle}
        title={data.villa?.privateHeavensText?.title}
        description={data.villa?.privateHeavensText?.description}
        showKnowMore={false}
        id=''
      />

      {data.villa?.tabbedSliderBlock?.length &&
        data.villa?.tabbedSliderBlock?.map((d, index) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <ImageWithCard
              title={d?.title}
              tabItem={d?.tabItem}
              infoLineText={d?.infoLineText}
              actionButton={d?.actionButton}
              images={d?.images ?? []}
              imageFirst={index % 2 !== 0}
              isLast={
                index ===
                (data.villa?.tabbedSliderBlock?.length &&
                  data.villa?.tabbedSliderBlock?.length - 1)
              }
              id={''}
            />
          </div>
        ))}

      <div className='h-12.5' />
    </>
  );
}
