import SectionGrid from '@/components/home/sectionGrid';
import ImageWithOverlayCard from '@/components/home/imageWithOverlayCard';
import Image from 'next/image';
import ResortOverview from '@/components/home/resortOverview';
import BookingWidget from '@/components/home/bookingWidget';
import { items, items2, sections, sections2 } from '@/components/home/data';
import SectionHeader from '@/components/shared/SectionHeader';

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
              THE PRINTING AND TYPESETTING
            </h1>
          </div>
        </div>
        <BookingWidget />
      </div>
      <SectionHeader
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='RESORT OVERVIEW'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <ResortOverview />
      {sections.map((section, index) => (
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
        title='SPA'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        items={items}
      />
      {sections2.map((section, index) => (
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
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        items={items2}
      />
      <div className='h-12.5' />
    </>
  );
}
