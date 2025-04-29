'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SlideLeftIcon } from '../icons/slideLeftIcon';
import { SlideRightIcon } from '../icons/slideRightIcon';

export interface RoomFeature {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ImageWithOverlayCardProps {
  features: RoomFeature[];
  imageFirst?: boolean;
}

const ImageWithOverlayCard = ({
  features,
  imageFirst = false,
}: ImageWithOverlayCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Initialize Embla Carousel for mobile only
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (isMobile) {
      if (emblaApi) emblaApi.scrollPrev();
    } else {
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    }
  }, [emblaApi, isMobile, features.length]);

  const scrollNext = useCallback(() => {
    if (isMobile) {
      if (emblaApi) emblaApi.scrollNext();
    } else {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }
  }, [emblaApi, isMobile, features.length]);

  const onMobileSelect = useCallback(() => {
    if (!emblaApi || !isMobile) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, isMobile]);

  useEffect(() => {
    if (!emblaApi || !isMobile) return;

    emblaApi.on('select', onMobileSelect);
    emblaApi.on('reInit', onMobileSelect);
    onMobileSelect();

    return () => {
      emblaApi.off('select', onMobileSelect);
      emblaApi.off('reInit', onMobileSelect);
    };
  }, [emblaApi, onMobileSelect, isMobile]);

  return (
    <div className='relative w-full overflow-hidden'>
      {isMobile ? (
        // Mobile Layout
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {features.map((feature) => (
              <div className='min-w-0 flex-[0_0_100%]' key={feature.id}>
                <div className='relative'>
                  <div className='relative aspect-4/3 w-full'>
                    <Image
                      src={feature.image || '/placeholder.svg'}
                      alt='Rooms & Suites'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='relative z-20 mx-auto -mt-[83px] max-w-[calc(100%-40px)]'>
                    <div className='mb-3.5 flex justify-center'>
                      {features.map((_, index) => (
                        <button
                          key={index}
                          className={`mx-2 h-[3px] w-7 transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-gray-50'
                              : 'bg-[#B8B8B899]'
                          }`}
                          onClick={() => emblaApi?.scrollTo(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    <div className='bg-gray-100 px-2.5 py-6 text-center shadow-xs'>
                      <h2 className='mb-4 text-xl leading-6 font-semibold text-gray-800 uppercase'>
                        {feature.title}
                      </h2>
                      <div className='flex'>
                        <div className='mx-auto mb-5 flex h-0.5 w-full bg-yellow-500 sm:h-[3px] lg:w-[325px]' />
                      </div>
                      <p className='text-[13px] leading-6 text-gray-900'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div
          className={`flex h-[562px] md:h-[678px] ${imageFirst ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div
            className={`absolute z-[19] flex min-h-[260px] w-[582px] flex-col self-center bg-gray-100 px-5 pt-6 pb-2.5 shadow-xs md:min-h-[318px] md:w-[642px] md:px-10 md:pt-12 md:pb-5 ${imageFirst ? 'right-7.5 md:right-10 2xl:right-15' : 'left-7.5 md:left-10 2xl:left-15'}`}
          >
            <div className='relative flex flex-col justify-center'>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex flex-col justify-start transition-opacity duration-500 ease-in-out ${
                    index === currentIndex
                      ? 'z-10 opacity-100'
                      : 'z-0 opacity-0'
                  }`}
                >
                  <div>
                    <h2 className='mb-4 inline-block min-w-[325px] border-b-3 border-[#B5946E] pr-4 pb-4 text-[24px]/[24px] font-semibold text-gray-800 uppercase md:mb-7.5 md:pb-7.5 md:text-[28px]/[28px]'>
                      {feature.title}
                    </h2>
                  </div>
                  <p className='text-base leading-8'>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className='relative z-20 mt-auto flex justify-end gap-5 pt-4'>
              <button
                className='inline-flex cursor-pointer p-2.5'
                onClick={scrollPrev}
                aria-label='Previous slide'
              >
                <SlideLeftIcon className='text-gray-800 lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
              </button>
              <button
                className='inline-flex cursor-pointer p-2.5'
                onClick={scrollNext}
                aria-label='Next slide'
              >
                <SlideRightIcon className='text-gray-800 lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
              </button>
            </div>
          </div>
          <div className='relative sm:w-[calc(100%-267px)] lg:w-[calc(100%-533px)]'>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
                }`}
              >
                <Image
                  src={feature.image || '/placeholder.svg'}
                  alt='Rooms & Suites'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlayCard;
