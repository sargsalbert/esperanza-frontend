import SectionGrid from '@/components/home/sectionGrid';
import ImageWithOverlayCard from '@/components/home/imageWithOverlayCard';
import Image from 'next/image';
import BookingWidget from '@/components/home/bookingWidget';
import {
  itemExperiencesHome,
  diningMeeting,
  sectionsRoomsSuites,
  sectionsWellnessHome,
} from '@/components/api/data';
import SectionHeader from '@/components/shared/SectionHeader';
import Destination from '@/components/home/destination';

export default async function Home() {
  return (
    <>
      <div className='relative mb-17.5 flex h-[468px] w-full sm:h-[641px] md:mb-30 lg:mb-39 lg:h-[917px]'>
        {/* h-[calc(100vh-123px)] max-h-[917px] */}
        <div className='relative flex h-full w-full items-end'>
          <Image
            src='/resort-00.jpg'
            alt='Rooms & Suites'
            layout='fill'
            objectFit='cover'
          />
          <div className='relative z-1 flex h-[40%] w-full items-end justify-center bg-gradient-to-t from-black via-black/70 to-transparent pb-[72px] lg:pb-[155px]'>
            <h1 className='px-5 text-center text-[22px] font-semibold text-gray-50 sm:px-7.5 sm:text-[30px] lg:px-15 lg:text-[40px]'>
              {/* THE PRINTING AND TYPESETTING */}
            </h1>
          </div>
        </div>
        <BookingWidget />
      </div>
      <SectionHeader
        title='Destination'
        description='Tucked away on the tranquil shores of Ungurys Lake, Esperanza Lake Resort is a secluded hideaway between forest and water, where nature, wellness, and comfort come together. The resort’s architecture blends seamlessly into the landscape, with natural materials and wabi-sabi-inspired design creating a quiet elegance.'
      />
      <Destination />
      {sectionsRoomsSuites.map((section, index) => (
        <div key={section.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <SectionHeader
            title={section.title}
            description={section.description}
          />
          <ImageWithOverlayCard
            features={section.features}
            imageFirst={index % 2 !== 0}
          />
        </div>
      ))}

      <SectionGrid
        title='Wellness'
        description='Immersed in the rhythms of nature, The Spa Esperanza is a space of stillness and renewal. Infused with natural elements, it invites you to slow down, restore, and return to yourself – through rituals that nurture both body and mind.'
        items={sectionsWellnessHome}
      />

      {diningMeeting.map((section, index) => (
        <div key={section.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <SectionHeader
            title={section.title}
            description={section.description}
          />
          <ImageWithOverlayCard
            features={section.features}
            imageFirst={index % 2 !== 0}
          />
        </div>
      ))}
      <SectionGrid
        title='EXPERIENCES'
        description='At Esperanza, time unfolds at its own pace. Whether active or restful, each experience is designed to connect you with the elements, the landscape, and a simpler rhythm of life.'
        items={itemExperiencesHome}
      />
      <div className='h-12.5' />
    </>
  );
}
