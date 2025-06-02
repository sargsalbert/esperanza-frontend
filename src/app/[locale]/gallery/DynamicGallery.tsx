'use client';

import { CloseIcon } from '@/components/icons/closeIcon';
import { SlideLeftIcon } from '@/components/icons/slideLeftIcon';
import { SlideRightIcon } from '@/components/icons/slideRightIcon';
import FadeInOnView from '@/components/shared/FadeInOnView';
import { UploadFile } from '@/gql/graphql';
import Image from 'rc-image';
import 'rc-image/assets/index.css';

type DynamicGalleryProps = {
  images: UploadFile[];
};

const layoutSlotsFirst9 = [
  // First grid of 5
  'col-span-10 h-[198px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-6 h-[203px] sm:col-span-2 sm:row-span-2 sm:h-[526.4px] lg:h-[752px]',
  'col-span-4 h-[203px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-4 h-[170px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  'col-span-6 h-[170px] sm:col-span-1 sm:h-[259px] lg:h-[370px]',
  // Second grid of 4
  'col-span-1 h-[131px] sm:col-span-6 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 row-span-2 h-[268px] sm:col-span-4 sm:row-span-1 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 h-[131px] sm:col-span-4 sm:h-[526.4px] lg:h-[752px]',
  'col-span-2 h-[232px] sm:col-span-6 sm:h-[526.4px] lg:h-[752px]',
];

// Layout to repeat after index 9
const repeatLayoutSlots = [
  'col-span-1 h-[131px] sm:col-span-6 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 row-span-2 h-[268px] sm:col-span-4 sm:row-span-1 sm:h-[413.7px] lg:h-[591px]',
  'col-span-1 h-[131px] sm:col-span-4 sm:h-[526.4px] lg:h-[752px]',
  'col-span-2 h-[232px] sm:col-span-6 sm:h-[526.4px] lg:h-[752px]',
  'col-span-6 h-[203px] sm:col-span-2 sm:row-span-2 sm:h-[526.4px] lg:h-[752px]',
];

export const DynamicGallery = ({ images }: DynamicGalleryProps) => {
  return (
    <div className='mx-auto mb-12.5 px-5 sm:mb-15 sm:px-7.5 lg:mb-32.5 lg:px-15'>
      <Image.PreviewGroup
        preview={{
          icons: {
            close: <CloseIcon className='text-white' />,
            left: <SlideLeftIcon className='text-white' />,
            right: <SlideRightIcon className='text-white' />,
          },
        }}
      >
        {/* First Grid (images 0–4) */}
        {images.length > 0 && (
          <div className='mb-1.5 grid grid-cols-10 gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-4 sm:gap-2 lg:mb-3 lg:gap-3'>
            {images.slice(0, 5).map((img, index) => (
              <FadeInOnView
                key={index}
                className={`relative ${layoutSlotsFirst9[index]}`}
              >
                <Image
                  src={img.url}
                  alt={img.alternativeText || img.name}
                  className='cursor-pointer object-cover'
                />
              </FadeInOnView>
            ))}
          </div>
        )}

        {/* Second Grid (images 5–8) */}
        {images.length > 5 && (
          <div className='mb-1.5 grid grid-cols-[60%_40%] gap-1.5 overflow-hidden sm:mb-2 sm:grid-cols-10 sm:gap-2 lg:mb-3 lg:gap-3'>
            {images.slice(5, 9).map((img, index) => (
              <FadeInOnView
                key={index}
                className={`relative ${layoutSlotsFirst9[index + 5]}`}
              >
                <Image
                  src={img.url}
                  alt={img.alternativeText || img.name}
                  className='cursor-pointer object-cover'
                />
              </FadeInOnView>
            ))}
          </div>
        )}

        {/* Repeat layout from image 9 onwards */}
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
                      <FadeInOnView
                        key={img.url + i}
                        className={`relative ${repeatLayoutSlots[i % repeatLayoutSlots.length]}`}
                      >
                        <Image
                          src={img.url}
                          alt={img.alternativeText || img.name}
                          className='cursor-pointer object-cover'
                        />
                      </FadeInOnView>
                    ))}
                  </div>
                );
              },
            )}
          </div>
        )}
      </Image.PreviewGroup>
    </div>
  );
};
