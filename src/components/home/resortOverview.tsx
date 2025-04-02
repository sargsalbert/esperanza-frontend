import Image from 'next/image';

const ResortOverview = () => {
  return (
    <div className='mx-auto mb-20 grid max-w-[1360px] grid-cols-1 gap-3 overflow-hidden md:grid-cols-2'>
      <div className='relative h-[334px] md:col-span-2 md:h-[334px]'>
        <Image src='/resort-1.jpg' alt='' fill className='object-cover' />
      </div>

      <div className='relative h-[510px]'>
        <Image src='/resort-2.jpg' alt='' fill className='object-cover' />
      </div>
      <div className='relative h-[510px]'>
        <Image src='/resort-3.jpg' alt='' fill className='object-cover' />
      </div>
    </div>
  );
};

export default ResortOverview;
