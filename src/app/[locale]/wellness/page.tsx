import SectionGrid from '@/components/home/sectionGrid';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { fetchData } from '@/lib/apolloClient';
import { UploadFile, WellnessQuery } from '@/gql/graphql';
import { WELLNESS_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import ImageGridTree from '@/components/home/imageGridTree';

export default async function Wellness({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<WellnessQuery>(WELLNESS_QUERY, { locale });

  return (
    <>
      <PageHeader
        imgUrl={data.wellness?.heroSection?.heroImage?.url}
        title={data.wellness?.heroSection?.heroText}
      />

      <SectionHeader
        subtitle={data.wellness?.ritualRenewalText?.subtitle}
        title={data.wellness?.ritualRenewalText?.title}
        description={data.wellness?.ritualRenewalText?.description}
        buttonText={data.wellness?.ritualRenewalText?.buttonText}
        buttonUrl={data.wellness?.ritualRenewalText?.buttonUrl}
        newTab={data.wellness?.ritualRenewalText?.newTab}
        id=''
      />

      {data.wellness?.ritualRenewalImages && (
        <ImageGridTree
          images={
            data.wellness?.ritualRenewalImages?.multipleImages?.filter(
              (img): img is UploadFile => img !== null,
            ) ?? []
          }
        />
      )}

      <SectionHeader
        subtitle={data.wellness?.facilitiesText?.subtitle}
        title={data.wellness?.facilitiesText?.title}
        description={data.wellness?.facilitiesText?.description}
        buttonText={data.wellness?.facilitiesText?.buttonText}
        buttonUrl={data.wellness?.facilitiesText?.buttonUrl}
        newTab={data.wellness?.facilitiesText?.newTab}
        id=''
      />

      <SectionGrid sectionGridSlider={data.wellness?.sectionGridSlider ?? []} />

      {data.wellness?.tabbedSliderBlock?.length &&
        data.wellness?.tabbedSliderBlock?.map((d, index) => (
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
                (data.wellness?.tabbedSliderBlock?.length &&
                  data.wellness?.tabbedSliderBlock?.length - 1)
              }
              id={''}
            />
          </div>
        ))}

      <div className='h-12.5' />
    </>
  );
}
