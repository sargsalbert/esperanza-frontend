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

      {sectionsRooms.map((v, index) => (
        <div key={v.id} className='md:mb-12.5 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Check Availability',
            }}
            uiType='collapse'
          />
        </div>
      ))}

      <div className='h-12.5' />
    </>
  );
}
