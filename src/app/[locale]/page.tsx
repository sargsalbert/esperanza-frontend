import SectionHeader from '@/components/shared/SectionHeader';
import { HOME_QUERY } from '@/lib/graphql/queries';
import { fetchData } from '@/lib/apolloClient';
import { HomeQuery, UploadFile } from '@/gql/graphql';
import SectionGrid from '@/components/home/sectionGrid';
import ImageWithOverlayCard from '@/components/home/imageWithOverlayCard';
import { LocalePageProps } from './destination/page';
import ImageGridTree from '@/components/home/imageGridTree';
import TopBox from '@/components/home/topBox';

export default async function Home({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<HomeQuery>(HOME_QUERY, { locale });

  return (
    <>
      <TopBox
        heroSection={data.home?.heroSection}
        bookingWidget={data.home?.bookingWidget}
      />
      <SectionHeader
        subtitle={data.home?.destinationText?.subtitle}
        title={data.home?.destinationText?.title}
        description={data.home?.destinationText?.description}
        buttonText={data.home?.destinationText?.buttonText}
        buttonUrl={data.home?.destinationText?.buttonUrl}
        newTab={data.home?.destinationText?.newTab}
        id=''
      />

      {data.home?.destinationImages && (
        <ImageGridTree
          images={
            data.home?.destinationImages?.multipleImages?.filter(
              (img): img is UploadFile => img !== null,
            ) ?? []
          }
        />
      )}

      {data.home?.headerTextWithSliderBlock?.length &&
        data.home.headerTextWithSliderBlock.map((d, index) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <SectionHeader
              subtitle={d?.sectionText?.subtitle}
              title={d?.sectionText?.title}
              description={d?.sectionText?.description}
              buttonText={d?.sectionText?.buttonText}
              buttonUrl={d?.sectionText?.buttonUrl}
              newTab={d?.sectionText?.newTab}
              id=''
            />
            <ImageWithOverlayCard
              features={d?.textImageSliderBlock}
              imageFirst={index % 2 !== 0}
            />
          </div>
        ))}

      <SectionHeader
        subtitle={data.home?.wellnessText?.subtitle}
        title={data.home?.wellnessText?.title}
        description={data.home?.wellnessText?.description}
        buttonText={data?.home?.wellnessText?.buttonText}
        buttonUrl={data.home?.wellnessText?.buttonUrl}
        newTab={data.home?.wellnessText?.newTab}
        id=''
      />

      <SectionGrid sectionGridSlider={data.home?.wellnessGridSlider ?? []} />

      {data.home?.HeaderTextWithSliderBlockTwo?.length &&
        data.home.HeaderTextWithSliderBlockTwo.map((d, index) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <SectionHeader
              subtitle={d?.sectionText?.subtitle}
              title={d?.sectionText?.title}
              description={d?.sectionText?.description}
              buttonText={d?.sectionText?.buttonText}
              buttonUrl={d?.sectionText?.buttonUrl}
              newTab={d?.sectionText?.newTab}
              id=''
            />
            <ImageWithOverlayCard
              features={d?.textImageSliderBlock}
              imageFirst={index % 2 !== 0}
            />
          </div>
        ))}

      <SectionHeader
        subtitle={data.home?.experiencesText?.subtitle}
        title={data.home?.experiencesText?.title}
        description={data.home?.experiencesText?.description}
        buttonText={data.home?.experiencesText?.buttonText}
        buttonUrl={data.home?.experiencesText?.buttonUrl}
        newTab={data.home?.experiencesText?.newTab}
        id=''
      />
      <SectionGrid sectionGridSlider={data.home?.experiencesGridSlider ?? []} />

      <div className='h-12.5' />
    </>
  );
}
