import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { DestinationQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { DESTINATION_QUERY } from '@/lib/graphql/queries';
import ImageGrid from './ImageComponent';
import LocationMap from '@/components/shared/LocationMap';
import FadeInOnView from '@/components/shared/FadeInOnView';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';
import { notFound } from 'next/navigation';

export type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<DestinationQuery>(
    DESTINATION_QUERY,
    params,
    (data) => ({
      title: data.destination?.Seo?.metaTitle,
      description: data.destination?.Seo?.metaDescription,
      image: data.destination?.Seo?.shareImage?.url,
    }),
  );
}

export default async function Destination({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<DestinationQuery>(DESTINATION_QUERY, { locale });

  if (!data.destination) return notFound();

  return (
    <>
      {!data.destination?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data.destination?.heroSection?.heroImage}
          title={data.destination?.heroSection?.heroText}
        />
      )}
      {!data.destination?.beforeMapText?.hideThisBlock && (
        <SectionHeader
          subtitle={data.destination?.beforeMapText?.subtitle}
          title={data.destination?.beforeMapText?.title}
          description={data.destination?.beforeMapText?.description}
          buttonText={data.destination?.beforeMapText?.buttonText}
          buttonUrl={data.destination?.beforeMapText?.buttonUrl}
          newTab={data.destination?.beforeMapText?.newTab}
          id=''
        />
      )}
      <FadeInOnView>
        <div className='overflow-hidden px-5 pb-5 sm:pb-7.5 md:px-7.5 lg:px-[14.5%]'>
          <div className='aspect-3/2 w-full lg:aspect-16/9'>
            <LocationMap />
          </div>
        </div>
      </FadeInOnView>
      {data.destination?.afterMapText && (
        <FadeInOnView>
          <div className='mb-12.5 px-5 sm:mb-15 md:px-7.5 lg:mb-20 lg:px-[22%]'>
            <p className='text-center text-[14px]/[26px] sm:text-[16px]/[32px]'>
              {data.destination.afterMapText}
            </p>
          </div>
        </FadeInOnView>
      )}
      {!data.destination?.architectureDesignText?.hideThisBlock && (
        <SectionHeader
          subtitle={data.destination?.architectureDesignText?.subtitle}
          title={data.destination?.architectureDesignText?.title}
          description={data.destination?.architectureDesignText?.description}
          buttonText={data.destination?.architectureDesignText?.buttonText}
          buttonUrl={data.destination?.architectureDesignText?.buttonUrl}
          newTab={data.destination?.architectureDesignText?.newTab}
          id=''
        />
      )}
      <div className='mb-12.5 grid grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 lg:px-[14.5%]'>
        {data.destination?.architectureDesignImages?.multipleImages?.length
          ? data.destination.architectureDesignImages.multipleImages.map(
              (d, index) => {
                if (!d) return null;
                return (
                  <ImageGrid key={d.documentId} index={index} imageData={d} />
                );
              },
            )
          : null}
      </div>
    </>
  );
}
