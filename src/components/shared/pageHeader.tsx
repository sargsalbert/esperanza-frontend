'use client';

import { UploadFile } from '@/gql/graphql';
import { useViewportHeight } from '@/hooks/useViewportHeight';
import { FC } from 'react';
import StrapiImage from './StrapiImage';

interface PageHeaderProps {
  heroImage?: UploadFile | null;
  title?: string | null;
}

const PageHeader: FC<PageHeaderProps> = ({ heroImage, title = '' }) => {
  useViewportHeight();

  return (
    <div className='relative mb-7.5 flex h-[calc(var(--vh,1vh)*100-84px)] w-full md:h-[calc(var(--vh,1vh)*100-110px)] lg:mb-10 xl:mb-15 2xl:h-[calc(var(--vh,1vh)*100-123px)]'>
      <div className='relative flex h-full w-full overflow-hidden'>
        {heroImage && <StrapiImage image={heroImage} className='absolute' />}
        <div className='relative flex h-full w-full items-center justify-center bg-[linear-gradient(0deg,_rgba(0,0,0,0.5)_0%,_rgba(255,255,255,0)_100%)]'>
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
