import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { DestinationQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { DESTINATION_QUERY } from '@/lib/graphql/queries';
import ImageGrid from './ImageComponent';
import LocationMap from '@/components/shared/LocationMap';
import FadeInOnView from '@/components/shared/FadeInOnView';
import { i18n } from '../../../../i18n-config';

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const revalidate = 60;

export type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Destination({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<DestinationQuery>(DESTINATION_QUERY, { locale });

  return (
    <>
      <PageHeader
        imgUrl={data.destination?.heroSection?.heroImage?.url}
        title={data.destination?.heroSection?.heroText}
      />
      <SectionHeader
        subtitle={data.destination?.beforeMapText?.subtitle}
        title={data.destination?.beforeMapText?.title}
        description={data.destination?.beforeMapText?.description}
        buttonText={data.destination?.beforeMapText?.buttonText}
        buttonUrl={data.destination?.beforeMapText?.buttonUrl}
        newTab={data.destination?.beforeMapText?.newTab}
        id=''
      />
      <FadeInOnView>
        <div className='mx-auto max-w-[1480px] overflow-hidden px-5 pb-5 sm:pb-7.5 md:px-7.5 lg:px-10 2xl:px-15'>
          <div className='aspect-3/2 w-full lg:aspect-16/9'>
            <LocationMap />
          </div>
        </div>
      </FadeInOnView>
      {data.destination?.afterMapText && (
        <FadeInOnView>
          <div className='mx-auto mb-12.5 max-w-[1160px] px-5 sm:mb-15 md:px-7.5 lg:mb-20 lg:px-10 2xl:px-15'>
            <p className='text-center text-[14px]/[26px] sm:text-[16px]/[32px]'>
              {data.destination.afterMapText}
            </p>
          </div>
        </FadeInOnView>
      )}
      <SectionHeader
        subtitle={data.destination?.architectureDesignText?.subtitle}
        title={data.destination?.architectureDesignText?.title}
        description={data.destination?.architectureDesignText?.description}
        buttonText={data.destination?.architectureDesignText?.buttonText}
        buttonUrl={data.destination?.architectureDesignText?.buttonUrl}
        newTab={data.destination?.architectureDesignText?.newTab}
        id=''
      />
      <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 lg:px-10 2xl:px-15'>
        {data.destination?.architectureDesignImages?.multipleImages?.length
          ? data.destination.architectureDesignImages.multipleImages.map(
              (d, index) => {
                if (!d) return null; // Skip null entries
                return (
                  <ImageGrid key={d.documentId} index={index} url={d.url} />
                );
              },
            )
          : null}
      </div>
    </>
  );
}
