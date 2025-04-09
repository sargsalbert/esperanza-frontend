import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';

export default async function Gallery() {
  return (
    <>
      <PageHeader imgUrl='/resort-2.jpg' title='THE PRINTING AND TYPESETTING' />

      <div className='mx-auto mb-12.5 px-5 sm:mb-15 sm:px-7.5 lg:mb-32.5 lg:px-15'>
        <SectionHeader
          smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh '
          title='GALLERY'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        />
        <div className='mb-1.5 grid grid-cols-10 gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-4 sm:gap-2 lg:mb-3 lg:gap-3'>
          <div className='relative col-span-10 h-[198px] sm:col-span-1 sm:h-[259px] lg:h-[370px]'>
            <Image
              src='/resort-999.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-6 h-[203px] sm:col-span-2 sm:row-span-2 sm:h-[526.4px] lg:h-[752px]'>
            <Image
              src='/resort-g1.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-4 h-[203px] sm:col-span-1 sm:h-[259px] lg:h-[370px]'>
            <Image
              src='/resort-3.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-4 h-[170px] sm:col-span-1 sm:h-[259px] lg:h-[370px]'>
            <Image
              src='/resort-4.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-6 h-[170px] sm:col-span-1 sm:h-[259px] lg:h-[370px]'>
            <Image
              src='/resort-5.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
        </div>
        <div className='mb-1.5 grid grid-cols-[60%_40%] gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-10 sm:gap-2 lg:mb-3 lg:gap-3'>
          <div className='relative col-span-1 h-[131px] sm:col-span-5 sm:h-[413.7px] lg:h-[591px]'>
            <Image
              src='/resort-5.1.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-1 row-span-2 h-[268px] sm:col-span-5 sm:row-span-1 sm:h-[413.7px] lg:h-[591px]'>
            <Image
              src='/resort-5.4.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-1 h-[131px] sm:col-span-5 sm:h-[526.4px] lg:h-[752px]'>
            <Image
              src='/resort-5.8.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
          <div className='relative col-span-2 h-[232px] sm:col-span-5 sm:h-[526.4px] lg:h-[752px]'>
            <Image
              src='/resort-5.9.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
