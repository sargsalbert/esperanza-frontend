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
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='Rooms & Suites'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />

      {sectionsRooms.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Check Availability',
            }}
          />
        </div>
      ))}

      <div className='h-12.5' />
    </>
  );
}
