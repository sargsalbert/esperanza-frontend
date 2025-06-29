'use client';

import { useState } from 'react';
import { UploadFile } from '@/gql/graphql';
import { ImageViewer } from './ImageViewer';
import StrapiImage from '@/components/shared/StrapiImage';

type DynamicGalleryProps = {
  images: UploadFile[];
};

const layoutSlotsFirst9 = [
  'col-span-10 h-[198px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-6 h-[203px] sm:col-span-2 sm:row-span-2 sm:h-[526.4px] lg:h-[752px]',
  'col-span-4 h-[203px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-4 h-[170px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-6 h-[170px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-1 h-[131px] sm:col-span-6 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 row-span-2 h-[268px] sm:col-span-4 sm:row-span-1 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 h-[131px] sm:col-span-4 sm:h-[526.4px] lg:h-[752px]',
  'col-span-2 h-[232px] sm:col-span-6 sm:h-[526.4px] lg:h-[752px]',
];

const repeatLayoutSlots = [
  'col-span-1 h-[131px] sm:col-span-6 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 row-span-2 h-[268px] sm:col-span-4 sm:row-span-1 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 h-[131px] sm:col-span-4 sm:h-[526.4px] lg:h-[752px]',
  'col-span-2 h-[232px] sm:col-span-6 sm:h-[526.4px] lg:h-[752px]',
  'col-span-6 h-[203px] sm:col-span-2 sm:row-span-2 sm:h-[526.4px] lg:h-[752px]',
];

export const DynamicGallery = ({ images }: DynamicGalleryProps) => {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setViewerIndex(index);
  const closeViewer = () => setViewerIndex(null);
  const nextImage = () =>
    viewerIndex !== null && setViewerIndex((viewerIndex + 1) % images.length);
  const prevImage = () =>
    viewerIndex !== null &&
    setViewerIndex((viewerIndex - 1 + images.length) % images.length);

  return (
    <div className='mx-auto mb-12.5 px-5 sm:mb-15 sm:px-7.5 lg:mb-32.5 lg:px-15'>
      {images.length > 0 && (
        <div className='mb-1.5 grid grid-cols-10 gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-4 sm:gap-2 lg:mb-3 lg:gap-3'>
          {images.slice(0, 5).map((img, index) => (
            <div
              key={index}
              className={`relative ${layoutSlotsFirst9[index]}`}
              onClick={() => openViewer(index)}
            >
              <StrapiImage image={img} className='cursor-pointer' />
            </div>
          ))}
        </div>
      )}

      {/* Next 4 images */}
      {images.length > 5 && (
        <div className='mb-1.5 grid grid-cols-[60%_40%] gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-10 sm:gap-2 lg:mb-3 lg:gap-3'>
          {images.slice(5, 9).map((img, index) => (
            <div
              key={index}
              className={`relative ${layoutSlotsFirst9[index + 5]}`}
              onClick={() => openViewer(index + 5)}
            >
              <StrapiImage image={img} className='cursor-pointer' />
            </div>
          ))}
        </div>
      )}

      {/* Remaining blocks */}
      {images.length > 9 && (
        <div className='flex flex-col gap-6'>
          {Array.from({ length: Math.ceil((images.length - 9) / 5) }).map(
            (_, blockIndex) => {
              const start = 9 + blockIndex * 5;
              const blockImages = images.slice(start, start + 5);

              return (
                <div
                  key={blockIndex}
                  className='mb-1.5 grid grid-cols-[60%_40%] gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-10 sm:gap-2 lg:mb-3 lg:gap-3'
                >
                  {blockImages.map((img, i) => (
                    <div
                      key={img.url + i}
                      className={`relative ${repeatLayoutSlots[i % repeatLayoutSlots.length]}`}
                      onClick={() => openViewer(start + i)}
                    >
                      <StrapiImage image={img} className='cursor-pointer' />
                    </div>
                  ))}
                </div>
              );
            },
          )}
        </div>
      )}
      {viewerIndex !== null && (
        <ImageViewer
          images={images}
          currentIndex={viewerIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};
