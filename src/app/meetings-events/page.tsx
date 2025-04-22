import { sectionsMeetingsEvents } from '@/components/api/data';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { TabsData } from '@/components/shared/imageWithCard/types';
import Input from '@/components/shared/Input';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import TextArea from '@/components/shared/TextArea';

export default async function MeetingsEvents() {
  return (
    <>
      <PageHeader imgUrl='/resort-7.jpg' title='Meetings & Events' />

      <SectionHeader
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='Meetings & Events'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />
      {sectionsMeetingsEvents.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Inquire',
            }}
          />
        </div>
      ))}

      <SectionHeader
        title='CONTACT US'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />

      <div className='mx-auto max-w-4xl px-[25px] py-7.5 md:py-15'>
        <Input placeholder='Name' />
        <Input placeholder='Surname' />
        <Input placeholder='Email' />
        <Input placeholder='Phone' />

        <Input placeholder='Date' type='date' />

        <Input placeholder='Number of Guests' type='number' />
        <TextArea placeholder='Message' />
        <div className='mt-12.5 flex justify-center md:justify-end'>
          <button
            // onClick={primaryButton.onClick}
            className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 md:min-w-38 md:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
          >
            Send
          </button>
        </div>
      </div>

      <div className='h-12.5' />
    </>
  );
}
