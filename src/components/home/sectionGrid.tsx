'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import SectionHeader from '../shared/SectionHeader';
import { SlideRightIcon } from '../icons/slideRightIcon';
import { SlideLeftIcon } from '../icons/slideLeftIcon';

export type ItemProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const SectionGrid = ({
  title = '',
  description = '',
  items,
  showKnowMore,
}: {
  title?: string;
  description?: string;
  items: ItemProps[];
  showKnowMore?: boolean;
}) => {
  // Initialize Embla Carousel with options
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    skipSnaps: false,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className='mb-12.5 sm:mb-15 lg:mb-20'>
      {title && description && (
        <SectionHeader
          title={title}
          description={description}
          showKnowMore={showKnowMore}
        />
      )}

      <div
        className='relative overflow-hidden lg:mx-10 2xl:mx-15'
        ref={emblaRef}
      >
        <div className='flex'>
          {items.map((item, index) => (
            <div
              key={index}
              className='mr-[12px] flex-[0_0_calc(100%-48px)] lg:mr-[14px] lg:flex-[0_0_calc(((100%-28px)/3))]'
            >
              <div className='relative aspect-3/2 w-full overflow-hidden lg:aspect-5/4'>
                <Image
                  src={item.imageUrl}
                  alt='A beautiful view'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full flex-1 flex-col bg-gray-100 p-6 text-center lg:p-7 lg:text-left xl:p-8'>
                <h2 className='mb-3 justify-center border-b-2 border-yellow-500 pb-3 text-[20px] font-semibold text-gray-800 uppercase lg:mb-4 lg:border-b-3 lg:pb-4 lg:text-[22px] xl:mb-5 xl:pb-5 xl:text-[28px]'>
                  {item.title}
                </h2>

                <div className='text-[14px]/[28px] md:text-[16px]/[32px]'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='absolute top-[30%] z-10 hidden w-full -translate-y-1/2 justify-between px-7.5 lg:flex'>
          <button
            className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px] 2xl:h-[54px] 2xl:w-[54px]'
            onClick={scrollPrev}
            aria-label='Previous slide'
          >
            <SlideLeftIcon className='lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
          </button>
          <button
            className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px] 2xl:h-[54px] 2xl:w-[54px]'
            onClick={scrollNext}
            aria-label='Next slide'
          >
            <SlideRightIcon className='lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionGrid;
