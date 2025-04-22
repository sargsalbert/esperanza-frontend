import Image from 'next/image';

interface PageHeaderProps {
  imgUrl: string;
  title: string;
}

const PageHeader = ({ imgUrl, title }: PageHeaderProps) => {
  return (
    <div className='relative mb-7.5 flex h-[calc(100vh-84px)] w-full sm:h-[calc(100vh-100px)] md:mb-15 md:h-[calc(100vh-123px)] lg:mb-20'>
      {/* h-[calc(100vh-123px)] max-h-[917px] */}
      <div className='relative flex h-full w-full'>
        <Image
          src={imgUrl}
          alt='Rooms & Suites'
          layout='fill'
          objectFit='cover'
        />
        <div className='relative flex h-full w-full items-center justify-center bg-[linear-gradient(0deg,_#000000_0%,_rgba(255,255,255,0)_100%)]'>
          <h1 className='p-5 text-center text-[22px] font-semibold text-gray-50 uppercase sm:px-7.5 sm:text-[30px] lg:px-15 lg:text-[50px]'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
