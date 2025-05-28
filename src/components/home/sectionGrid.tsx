'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SlideRightIcon } from '../icons/slideRightIcon';
import { SlideLeftIcon } from '../icons/slideLeftIcon';
import { ComponentSharedSectionGridSlider } from '@/gql/graphql';
import FadeInOnView from '../shared/FadeInOnView';

type SectionGridProps = {
  sectionGridSlider?: (ComponentSharedSectionGridSlider | null)[] | null;
};

const SectionGrid = ({ sectionGridSlider }: SectionGridProps) => {
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

  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateImageHeight = () => {
      if (window.innerWidth > 1023 && imageWrapperRef.current) {
        setImageHeight(imageWrapperRef.current.offsetHeight);
      } else {
        setImageHeight(null);
      }
    };

    updateImageHeight();

    window.addEventListener('resize', updateImageHeight);

    return () => {
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []);

  return (
    <FadeInOnView>
      <div className='mb-12.5 sm:mb-15 lg:mb-20'>
        <div
          className='relative overflow-hidden lg:mx-10 2xl:mx-15'
          ref={emblaRef}
        >
          <div className='flex'>
            {sectionGridSlider?.map((item, index) => (
              <div
                key={index}
                className='mr-[12px] flex-[0_0_calc(100%-48px)] lg:mr-[14px] lg:flex-[0_0_calc(((100%-28px)/3))]'
              >
                <div
                  ref={index === 0 ? imageWrapperRef : null}
                  className='relative aspect-5/4 w-full overflow-hidden sm:aspect-4/2 lg:aspect-5/4'
                >
                  <Image
                    src={item?.image?.url || ''}
                    alt='A beautiful view'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='flex h-full flex-1 flex-col bg-gray-100 px-2.5 py-5 text-center md:p-6 lg:p-7 lg:text-left xl:p-8'>
                  <div>
                    <h2 className='mb-3 inline-flex min-w-[70%] justify-center border-b-2 border-yellow-500 px-5 pb-3 text-[20px] font-semibold text-gray-800 uppercase lg:mb-4 lg:flex lg:min-w-auto lg:justify-start lg:border-b-3 lg:px-0 lg:pb-4 lg:text-[22px] xl:mb-5 xl:pb-5 xl:text-[24px] 2xl:text-[28px]'>
                      {item?.title}
                    </h2>
                  </div>
                  <div className='text-[14px]/[28px] md:text-[16px]/[32px]'>
                    {item?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ top: imageHeight ? `${imageHeight / 2}px` : '28%' }}
            className='absolute z-10 hidden w-full -translate-y-1/2 justify-between px-7.5 lg:flex'
          >
            <button
              className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px] 2xl:h-[54px] 2xl:w-[54px]'
              onClick={scrollPrev}
              aria-label='Previous slide'
            >
              <SlideLeftIcon className='text-gray-50 lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
            </button>
            <button
              className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px] 2xl:h-[54px] 2xl:w-[54px]'
              onClick={scrollNext}
              aria-label='Next slide'
            >
              <SlideRightIcon className='text-gray-50 lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
            </button>
          </div>
        </div>
      </div>
    </FadeInOnView>
  );
};

export default SectionGrid;
