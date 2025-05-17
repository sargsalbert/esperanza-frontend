import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import Input from '@/components/shared/Input';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { MeetingsAndEventQuery } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { MEETINGS_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import SectionGrid from '@/components/home/sectionGrid';

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

      <div className='h-12.5' />

      <SectionHeader
        title={data.meetingsAndEvent?.contactUsText?.title}
        description={data.meetingsAndEvent?.contactUsText?.description}
        buttonText={data.meetingsAndEvent?.contactUsText?.buttonText}
        id=''
      />

      <div className='mx-auto max-w-5xl px-5 pb-12.5 sm:pb-15 md:px-10 lg:pb-20 2xl:px-15'>
        <div className='mt-2.5 mb-10 sm:mt-5 sm:mb-12.5'>
          <Input placeholder='Name' />
          <Input placeholder='Surname' />
          <Input placeholder='Phone' />
          <Input placeholder='Email' />
          <Select
            name='date'
            placeholder='Dates'
            // options={options}
            // value={formData.voucherType}
            // onChange={handleChange}
          />

          <Input placeholder='Number of Guests' type='number' />
          <TextArea placeholder='Message' />
        </div>
        <div className='flex justify-center lg:justify-end'>
          <button
            // onClick={primaryButton.onClick}
            className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
          >
            Send
          </button>
        </div>
      </div>

      <div className='h-12.5' />
    </>
  );
}
