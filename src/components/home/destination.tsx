import Image from 'next/image';

const Destination = () => {
  return (
    <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 2xl:px-15'>
      <div className='relative col-span-2 h-[150px] sm:h-[233px] lg:h-[334px]'>
        <Image
          src='/resort-1.jpg'
          alt=''
          layout='fill'
          objectFit='cover'
          className=''
        />
      </div>

      <div className='relative h-[232px] sm:h-[357px] lg:h-[510px]'>
        <Image
          src='/resort-2.jpg'
          alt=''
          layout='fill'
          objectFit='cover'
          className=''
        />
      </div>
      <div className='relative h-[232px] sm:h-[357px] lg:h-[510px]'>
        <Image
          src='/resort-3.jpg'
          alt=''
          layout='fill'
          objectFit='cover'
          className=''
        />
      </div>
    </div>
  );
};

export default Destination;
