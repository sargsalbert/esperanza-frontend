'use client';

import Image from 'next/image';
import { CloseIcon } from '@/components/icons/closeIcon';
import { SlideLeftIcon } from '@/components/icons/slideLeftIcon';
import { UploadFile } from '@/gql/graphql';
import React, { useEffect } from 'react';
import { SlideRightIcon } from '@/components/icons/slideRightIcon';

type ImageViewerProps = {
  images: UploadFile[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onClose]);

  if (!images[currentIndex]) return null;

  return (
    <div className='fixed inset-0 z-500 flex items-center justify-center bg-black/75'>
      <div
        className='absolute top-4 right-4 z-500 cursor-pointer p-3 text-white'
        onClick={onClose}
      >
        <CloseIcon className='h-4 w-4 lg:h-6 lg:w-6' />
      </div>
      <div
        className='absolute left-4 z-500 cursor-pointer p-3 text-white'
        onClick={onPrev}
      >
        <SlideLeftIcon className='h-4 w-4 lg:h-6 lg:w-6' />
      </div>
      <div
        className='absolute right-4 z-500 cursor-pointer p-3 text-white'
        onClick={onNext}
      >
        <SlideRightIcon className='h-4 w-4 lg:h-6 lg:w-6' />
      </div>

      <div className='relative flex h-full max-h-[90%] w-full max-w-[90%] items-center justify-center'>
        <Image
          src={images[currentIndex].url}
          alt={
            images[currentIndex].alternativeText || images[currentIndex].name
          }
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  );
};
