import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { MeetingsAndEventQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { MEETINGS_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import SectionGrid from '@/components/home/sectionGrid';
import ContactUsForm from './ContactUsForm';
import { i18n } from '../../../../i18n-config';

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function MeetingsEvents({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<MeetingsAndEventQuery>(MEETINGS_QUERY, {
    locale,
  });

  return (
    <>
      <PageHeader
        imgUrl={data.meetingsAndEvent?.heroSection?.heroImage?.url}
        title={data.meetingsAndEvent?.heroSection?.heroText}
      />

      <SectionHeader
        subtitle={data.meetingsAndEvent?.timelessMomentstext?.subtitle}
        title={data.meetingsAndEvent?.timelessMomentstext?.title}
        description={data.meetingsAndEvent?.timelessMomentstext?.description}
        buttonText={data.meetingsAndEvent?.timelessMomentstext?.buttonText}
        buttonUrl={data.meetingsAndEvent?.timelessMomentstext?.buttonUrl}
        newTab={data.meetingsAndEvent?.timelessMomentstext?.newTab}
        id=''
      />

      {data.meetingsAndEvent?.tabbedSliderBlock?.length &&
        data.meetingsAndEvent?.tabbedSliderBlock?.map((d, index) => (
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
                (data.meetingsAndEvent?.tabbedSliderBlock?.length &&
                  data.meetingsAndEvent?.tabbedSliderBlock?.length - 1)
              }
              id={''}
            />
          </div>
        ))}
      <SectionGrid
        sectionGridSlider={data.meetingsAndEvent?.sectionGridSlider ?? []}
      />

      <SectionHeader
        title={data.meetingsAndEvent?.contactUsText?.title}
        description={data.meetingsAndEvent?.contactUsText?.description}
        buttonText={data.meetingsAndEvent?.contactUsText?.buttonText}
        id=''
      />
      <ContactUsForm data={data} />

      <div className='h-12.5' />
    </>
  );
}
