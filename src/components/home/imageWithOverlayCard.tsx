'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

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
                  <div className='relative h-[318px] w-full'>
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
                        <div className='mx-auto mb-5 flex h-0.5 bg-yellow-500 sm:h-[3px] sm:w-[325px]' />
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
                <svg
                  width='11'
                  height='21'
                  viewBox='0 0 11 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.344951 9.38571L6.9974 0.46256C7.4572 -0.154187 8.20071 -0.154187 8.65562 0.46256L9.76111 1.94538C10.2209 2.56213 10.2209 3.55942 9.76111 4.16961L5.04569 10.4945L9.76111 16.8195C10.2209 17.4362 10.2209 18.4335 9.76111 19.0437L8.65563 20.5265C8.19582 21.1433 7.45231 21.1433 6.9974 20.5265L0.344951 11.6034C-0.114851 10.9998 -0.114851 10.0025 0.344951 9.38571Z'
                    fill='#362E25'
                  />
                </svg>
              </button>
              <button
                className='inline-flex cursor-pointer p-2.5'
                onClick={scrollNext}
                aria-label='Next slide'
              >
                <svg
                  width='11'
                  height='21'
                  viewBox='0 0 11 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.5584 11.6035L3.90592 20.5267C3.44612 21.1434 2.70261 21.1434 2.2477 20.5267L1.14221 19.0439C0.682412 18.4271 0.682412 17.4298 1.14221 16.8197L5.85763 10.4947L1.14221 4.16977C0.682409 3.55303 0.682409 2.55573 1.14221 1.94555L2.24769 0.462728C2.70749 -0.154019 3.451 -0.154019 3.90591 0.462728L10.5584 9.38588C11.0182 9.9895 11.0182 10.9868 10.5584 11.6035Z'
                    fill='#362E25'
                  />
                </svg>
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
