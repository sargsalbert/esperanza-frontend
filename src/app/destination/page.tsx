import LocationMap from '@/components/shared/LocationMap';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';

export default async function Destination() {
  return (
    <>
      <PageHeader imgUrl='/resort-5.3.jpg' title='Destination' />

      <SectionHeader
        smallTitle='A secluded hideaway between forest and water'
        title='Tucked Away, Yet Within Reach'
        description="Nestled on the shores of Ungurys lake, Esperanza Lake Resort lies in the heart of Aukštaitija National Park – one of Lithuania’s most protected and untouched natural sanctuaries. Encircled by verdant forests and pristine waters, the resort spans eleven hectares of private land, providing guests with uninterrupted access to nature's serenity. Undisturbed and immersive, it is a destination defined by nature – tranquil, timeless, and deeply grounding."
        showKnowMore={false}
      />

      <div className='mx-auto mb-12.5 max-w-[1480px] overflow-hidden px-5 sm:mb-15 sm:gap-2 sm:px-7.5 lg:mb-20 lg:px-15'>
        <div className='h-[267px] w-full sm:h-[450px] md:h-[653px] lg:h-[856px]'>
          <LocationMap />
        </div>
      </div>

      <SectionHeader
        title='Destination'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
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
