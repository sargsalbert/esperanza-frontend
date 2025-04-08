import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';

export default async function ResortOverview() {
  return (
    <>
      <PageHeader imgUrl='/resort-5.3.jpg' title='RESORT OVERVIEW' />
      <SectionHeader
        title='RESORT OVERVIEW'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      />
      <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 sm:px-7.5 lg:mb-20 lg:gap-3 lg:px-15'>
        <div className='relative col-span-1 h-[131px] sm:h-[229.6px] lg:h-[328px]'>
          <Image
            src='/resort-6.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>

        <div className='relative col-span-1 row-span-2 h-[268px] sm:h-[467.6px] lg:h-[668px]'>
          <Image
            src='/resort-7.1.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>
        <div className='relative col-span-1 h-[131px] sm:h-[229.6px] lg:h-[328px]'>
          <Image
            src='/resort-7.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>

        <div className='relative col-span-2 h-[204px] sm:h-[356.3px] lg:h-[509px]'>
          <Image
            src='/resort-55.jpg'
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
