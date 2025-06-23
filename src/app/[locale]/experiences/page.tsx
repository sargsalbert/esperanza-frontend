import SectionGrid from '@/components/home/sectionGrid';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { ExperienceQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { EXPERIENCE_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<ExperienceQuery>(
    EXPERIENCE_QUERY,
    params,
    (data) => ({
      title: data.experience?.seo?.metaTitle,
      description: data.experience?.seo?.metaDescription,
      image: data.experience?.seo?.shareImage?.url, 
    })
  );
}

export default async function Experiences({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<ExperienceQuery>(EXPERIENCE_QUERY, { locale });

  return (
    <>
      <PageHeader
        imgUrl={data.experience?.heroSection?.heroImage?.url}
        title={data.experience?.heroSection?.heroText}
      />

      <SectionHeader
        subtitle={data.experience?.exploreEsperanzaText?.subtitle}
        title={data.experience?.exploreEsperanzaText?.title}
        description={data.experience?.exploreEsperanzaText?.description}
        buttonText={data.experience?.exploreEsperanzaText?.buttonText}
        buttonUrl={data.experience?.exploreEsperanzaText?.buttonUrl}
        newTab={data.experience?.exploreEsperanzaText?.newTab}
        id=''
      />
      {data.experience?.tabbedSliderBlock?.length &&
        data.experience?.tabbedSliderBlock?.map((d, index) => (
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
                (data.experience?.tabbedSliderBlock?.length &&
                  data.experience?.tabbedSliderBlock?.length - 1)
              }
              id={''}
            />
          </div>
        ))}

      <SectionGrid
        sectionGridSlider={data.experience?.sectionGridSlider ?? []}
      />

      <div className='h-12.5' />
    </>
  );
}
