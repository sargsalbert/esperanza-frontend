import LocationMap from '@/components/shared/LocationMap';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';

export default async function Destination() {
  return (
    <>
      <PageHeader imgUrl='/resort-5.3.jpg' title='Destination' />

      <SectionHeader
        smallTitle='Tucked away, yet within reach '
        title='Location'
        description="Nestled on the shores of Ungurys lake, Esperanza Lake Resort lies in the heart of Aukštaitija National Park – one of Lithuania’s most protected and untouched natural sanctuaries. Encircled by verdant forests and pristine waters, the resort spans eleven hectares of private land, providing guests with uninterrupted access to nature's serenity. Undisturbed and immersive, it is a destination defined by nature – tranquil, timeless, and deeply grounding."
        showKnowMore={false}
      />

      <div className='mx-auto max-w-[1480px] overflow-hidden px-5 pb-5 sm:px-7.5 sm:pb-7.5 lg:px-15'>
        <div className='h-[267px] w-full sm:h-[450px] md:h-[653px] lg:h-[856px]'>
          <LocationMap />
        </div>
      </div>

      <div className='mx-auto mb-12.5 max-w-[1480px] px-5 sm:mb-15 sm:px-7.5 lg:mb-20 lg:px-15'>
        <p className='text-center text-[14px]/[26px] sm:text-[16px]/[32px]'>
          Though immersed in nature, Esperanza Lake Resort is easily within
          reach. Located just 40 km from Vilnius, the resort is accessible by
          car, while a direct train offers a quick connection to the nearby town
          of Trakai. Expect a scenic and convenient journey through the
          countryside and quiet forest roads – setting the tone for the retreat
          ahead. Transfers and directions available upon request.
        </p>
      </div>

      <SectionHeader
        title='Architecture & Design'
        description='Built from centuries-old Canadian cedar logs, the resort’s architecture is both grounding and timeless – rooted in nature and crafted to last. The warm textures, earthy tones, and natural materials create a harmony between structure and setting. Inside, design follows the wabi-sabi-inspired philosophy: minimalist, understated, and deeply connected to the land. Every space invites stillness through organic form, soft light, and purposeful simplicity.'
        showKnowMore={false}
      />
      <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 2xl:px-15'>
        <div className='relative col-span-1 h-[131px] sm:h-[229.6px] lg:h-[328px]'>
          <Image
            src='/resort-999.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>

        <div className='relative col-span-1 row-span-2 h-[268px] sm:h-[467.6px] lg:h-[668px]'>
          <Image
            src='/resort-3.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>
        <div className='relative col-span-1 h-[131px] sm:h-[229.6px] lg:h-[328px]'>
          <Image
            src='/resort-2.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>

        <div className='relative col-span-2 h-[204px] sm:h-[356.3px] lg:h-[509px]'>
          <Image
            src='/resort-777.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>
      </div>
    </>
  );
}
