import Image from 'next/image';

type TopSectionProps = {
  url?: string;
  title?: string | null;
};

const TopSection = ({ url, title }: TopSectionProps) => {
  return (
    <div className='relative flex h-full w-full items-end overflow-hidden'>
      <Image
        src={url || ''}
        alt={title || ''}
        fill
        priority
        className='object-cover'
      />
      <div className='relative z-1 flex h-[40%] w-full items-end justify-center bg-gradient-to-t from-black via-black/70 to-transparent pb-[72px] lg:pb-[155px]'>
        {title && (
          <h1 className='px-5 text-center text-[22px] font-semibold text-gray-50 sm:px-7.5 sm:text-[30px] lg:px-15 lg:text-[40px]'>
            {title}
          </h1>
        )}
      </div>
    </div>
  );
};

export default TopSection;
