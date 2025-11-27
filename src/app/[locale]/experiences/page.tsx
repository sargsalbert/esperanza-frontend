import SectionGrid from '@/components/home/sectionGrid';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { ExperienceQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { EXPERIENCE_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  return generateSeoMetadata<ExperienceQuery>(
    EXPERIENCE_QUERY,
    params,
    (data) => ({
      title: data.experience?.seo?.metaTitle,
      description: data.experience?.seo?.metaDescription,
      image: data.experience?.seo?.shareImage?.url,
      canonicalUrl: `/${locale}/experiences/`,
    }),
  );
}

export default async function Experiences({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<ExperienceQuery>(EXPERIENCE_QUERY, { locale });

  if (!data.experience) return notFound();

  return (
    <>
      {!data.experience?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data.experience?.heroSection?.heroImage}
          title={data.experience?.heroSection?.heroText}
        />
      )}
      {!data.experience?.exploreEsperanzaText?.hideThisBlock && (
        <SectionHeader
          subtitle={data.experience?.exploreEsperanzaText?.subtitle}
          title={data.experience?.exploreEsperanzaText?.title}
          description={data.experience?.exploreEsperanzaText?.description}
          buttonText={data.experience?.exploreEsperanzaText?.buttonText}
          buttonUrl={data.experience?.exploreEsperanzaText?.buttonUrl}
          newTab={data.experience?.exploreEsperanzaText?.newTab}
          id=''
        />
      )}
      {(data.experience?.tabbedSliderBlock ?? [])
        .filter((d) => !d?.hideThisBlock)
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

      <SectionGrid
        sectionGridSlider={(data.experience?.sectionGridSlider ?? []).filter(
          (item) => !item?.hideThisBlock,
        )}
      />

      <div className='h-12.5' />
    </>
  );
}
