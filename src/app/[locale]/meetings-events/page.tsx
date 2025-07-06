import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { MeetingsAndEventQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { MEETINGS_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import SectionGrid from '@/components/home/sectionGrid';
import ContactUsForm from './ContactUsForm';
import { Locale } from '../../../../i18n-config';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<MeetingsAndEventQuery>(
    MEETINGS_QUERY,
    params,
    (data) => ({
      title: data.meetingsAndEvent?.seo?.metaTitle,
      description: data.meetingsAndEvent?.seo?.metaDescription,
      image: data.meetingsAndEvent?.seo?.shareImage?.url,
    }),
  );
}

export default async function MeetingsEvents({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<MeetingsAndEventQuery>(MEETINGS_QUERY, {
    locale,
  });

  return (
    <>
      {!data.meetingsAndEvent?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data.meetingsAndEvent?.heroSection?.heroImage}
          title={data.meetingsAndEvent?.heroSection?.heroText}
        />
      )}
      {!data.meetingsAndEvent?.timelessMomentstext?.hideThisBlock && (
        <SectionHeader
          subtitle={data.meetingsAndEvent?.timelessMomentstext?.subtitle}
          title={data.meetingsAndEvent?.timelessMomentstext?.title}
          description={data.meetingsAndEvent?.timelessMomentstext?.description}
          buttonText={data.meetingsAndEvent?.timelessMomentstext?.buttonText}
          buttonUrl={data.meetingsAndEvent?.timelessMomentstext?.buttonUrl}
          newTab={data.meetingsAndEvent?.timelessMomentstext?.newTab}
          id=''
        />
      )}

      {(data.meetingsAndEvent?.tabbedSliderBlock ?? [])
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
        sectionGridSlider={(
          data.meetingsAndEvent?.sectionGridSlider ?? []
        ).filter((item) => !item?.hideThisBlock)}
      />
      {!data.meetingsAndEvent?.contactUsText?.hideThisBlock && (
        <SectionHeader
          title={data.meetingsAndEvent?.contactUsText?.title}
          description={data.meetingsAndEvent?.contactUsText?.description}
          buttonText={data.meetingsAndEvent?.contactUsText?.buttonText}
          id=''
        />
      )}
      <ContactUsForm data={data} locale={locale as Locale} />

      <div className='h-12.5' />
    </>
  );
}
