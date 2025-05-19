import Image from 'next/image';
import { FC } from 'react';

interface PageHeaderProps {
  imgUrl?: string;
  title?: string | null;
}

const PageHeader: FC<PageHeaderProps> = ({ imgUrl = '', title = '' }) => {
  return (
    <div className='relative mb-7.5 flex h-[calc(100vh-84px)] w-full md:h-[calc(100vh-110px)] lg:mb-10 xl:mb-15 2xl:h-[calc(100vh-123px)]'>
      <div className='relative flex h-full w-full overflow-hidden'>
        <Image
          src={imgUrl}
          alt={title || ''}
          fill
          priority
          className='object-cover'
        />
        <div className='relative flex h-full w-full items-center justify-center bg-[linear-gradient(0deg,_#000000_0%,_rgba(255,255,255,0)_100%)]'>
          {title && (
            <h1 className='p-5 text-center text-[26px] font-semibold text-gray-50 uppercase sm:px-7.5 sm:text-[32px] md:text-[38px] lg:px-15 xl:text-[44px] 2xl:text-[50px]'>
              {title}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
