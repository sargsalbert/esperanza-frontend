import Image from 'next/image';

const Destination = () => {
  return (
    <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 overflow-hidden px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 lg:px-10 2xl:px-15'>
      <div className='relative col-span-2 aspect-8/3 w-full'>
        <Image src='/resort-1.jpg' alt='' fill className='object-cover' />
      </div>

      <div className='relative aspect-[3/4] w-full'>
        <Image src='/resort-2.jpg' alt='' fill className='object-cover' />
      </div>
      <div className='relative aspect-[3/4] w-full'>
        <Image src='/resort-3.jpg' alt='' fill className='object-cover' />
      </div>
    </div>
  );
};

export default Destination;
