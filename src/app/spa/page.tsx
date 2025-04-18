import { items, sectionsSpa } from '@/components/home/data';
import SectionGrid from '@/components/home/sectionGrid';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import Image from 'next/image';

export default async function Villas() {
  return (
    <>
      <PageHeader imgUrl='/resort-55.jpg' title='SPA' />

      <SectionHeader
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='SPA'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />

      <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 2xl:px-15'>
        <div className='relative col-span-1 row-span-2 h-[262px] sm:h-[679px] lg:h-[970px]'>
          <Image
            src='/resort-777.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>

        <div className='relative col-span-1 h-[128px] sm:h-[335.3px] lg:h-[479px]'>
          <Image
            src='/resort-999.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>

        <div className='relative col-span-1 h-[128px] sm:h-[335.3px] lg:h-[479px]'>
          <Image
            src='/resort-3.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>
      </div>

      <SectionGrid
        title='SPA'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        items={items}
        showKnowMore={false}
      />

      {sectionsSpa.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Book',
            }}
            secondaryButton={{
              text: 'Menu',
            }}
          />
        </div>
      ))}
      <div className='h-12.5' />
    </>
  );
}
