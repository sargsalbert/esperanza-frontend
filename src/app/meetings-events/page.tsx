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
        smallTitle='Intimate gatherings in nature'
        title='Timeless Moments'
        description='Whether it is a lakeside celebration, an intimate retreat, or a thoughtful business meeting, events at Esperanza Lake Resort are shaped by natural surroundings, understated elegance, and quiet attention to detail. With 28 rooms and suites, three villas, two restaurants, three dedicated indoor spaces, modern spa, and eleven hectares of outdoor grounds –each event can be tailored, intimate, and truly unforgettable.'
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
      <div className='h-12.5' />

      <SectionHeader
        title='Contact Us'
        description='Whether you are planning an intimate gathering or a full-scale celebration, our team is here to help shape every detail. From choosing the right space to crafting bespoke menus and experiences, we will work with you to bring your vision to life – quietly, thoughtfully, and with care.'
        showKnowMore={false}
      />

      <div className='mx-auto max-w-5xl px-5 pb-12.5 sm:pb-15 md:px-10 lg:pb-20 2xl:px-15'>
        <div className='mt-2.5 mb-7.5 sm:mt-5 sm:mb-12.5'>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Phone' />
          <Input placeholder='Email' />
          <Input placeholder='Dates' type='date' />
          <Input placeholder='Number of Guests' type='number' />
          <TextArea placeholder='Message' />
        </div>
        <div className='flex justify-center md:justify-end'>
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
