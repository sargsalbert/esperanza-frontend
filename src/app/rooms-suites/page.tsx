import { sectionsRooms } from '@/components/api/data';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { TabsData } from '@/components/shared/imageWithCard/types';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';

export default async function RoomsSuites() {
  return (
    <>
      <PageHeader imgUrl='/resort-777.jpg' title='Rooms & Suites' />

      <SectionHeader
        smallTitle='Shaped by nature, designed for your escape'
        title='Spaces to Breathe'
        description='Designed as restful sanctuaries, our 28 rooms and suites offer privacy while reflecting the stillness and beauty of the landscape beyond. Each space is thoughtfully composed to provide quiet comfort and visual clarity. Whether nestled among the trees or perched by the water, every room invites you to slow down, settle in, and simply be.'
        showKnowMore={false}
      />
      <div className='mt-2 mb-7.5 block text-center sm:mt-3 sm:mb-10 lg:hidden'>
        <button className='h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-medium text-gray-50 md:h-10.5 md:min-w-38'>
          Book
        </button>
      </div>

      {sectionsRooms.map((v, index) => (
        <div key={v.id} className='lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Check Availability',
            }}
            uiType='collapse'
            isLast={index === sectionsRooms.length - 1}
          />
        </div>
      ))}

      <div className='h-22.5 lg:h-12.5' />
    </>
  );
}
