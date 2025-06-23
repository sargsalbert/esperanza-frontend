import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { RoomsAndSuiteQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { ROOMS_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import FadeInOnView from '@/components/shared/FadeInOnView';
import LocaleLink from '@/components/shared/LocaleLink';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<RoomsAndSuiteQuery>(
    ROOMS_QUERY,
    params,
    (data) => ({
      title: data.roomsAndSuite?.seo?.metaTitle,
      description: data.roomsAndSuite?.seo?.metaDescription,
      image: data.roomsAndSuite?.seo?.shareImage?.url, 
    })
  );
}

export default async function RoomsSuites({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<RoomsAndSuiteQuery>(ROOMS_QUERY, { locale });
  return (
    <>
      <PageHeader
        imgUrl={data.roomsAndSuite?.heroSection?.heroImage?.url || ''}
        title={data.roomsAndSuite?.heroSection?.heroText}
      />

      <SectionHeader
        subtitle={data.roomsAndSuite?.spacesToBreatheText?.subtitle}
        title={data.roomsAndSuite?.spacesToBreatheText?.title}
        description={data.roomsAndSuite?.spacesToBreatheText?.description}
        buttonText={data.roomsAndSuite?.spacesToBreatheText?.buttonText}
        buttonUrl={data.roomsAndSuite?.spacesToBreatheText?.buttonUrl}
        newTab={data.roomsAndSuite?.spacesToBreatheText?.newTab}
        id=''
      />
      <FadeInOnView>
        <div className='mt-2 mb-7.5 block text-center sm:mt-3 sm:mb-10 lg:hidden'>
          <LocaleLink
            href={data.roomsAndSuite?.bookButtonShowMobile?.buttonUrl || ''}
            target={
              data.roomsAndSuite?.bookButtonShowMobile?.newTab
                ? '_blank'
                : undefined
            }
            className='inline-flex h-9 min-w-63 cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-medium text-gray-50 md:h-10.5 md:min-w-38'
          >
            {data.roomsAndSuite?.bookButtonShowMobile?.buttonText}
          </LocaleLink>
        </div>
      </FadeInOnView>

      {data.roomsAndSuite?.tabbedSliderBlock?.length &&
        data.roomsAndSuite?.tabbedSliderBlock?.map((d, index) => (
          <div key={index} className='lg:mb-20'>
            <ImageWithCard
              title={d?.title}
              tabItem={d?.tabItem}
              infoLineText={d?.infoLineText}
              actionButton={d?.actionButton}
              images={d?.images ?? []}
              imageFirst={index % 2 !== 0}
              uiType='collapse'
              isLast={
                index ===
                (data.roomsAndSuite?.tabbedSliderBlock?.length &&
                  data.roomsAndSuite?.tabbedSliderBlock?.length - 1)
              }
              id={''}
            />
          </div>
        ))}

      <div className='h-22.5 lg:h-12.5' />
    </>
  );
}
