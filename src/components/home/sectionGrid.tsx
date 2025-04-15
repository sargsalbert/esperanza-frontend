'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Divider from '../shared/Divider';
import Image from 'next/image';
import SectionHeader from '../shared/SectionHeader';

export type ItemProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const SectionGrid = ({
  title,
  description,
  items,
  showKnowMore,
}: {
  title: string;
  description: string;
  items: ItemProps[];
  showKnowMore?: boolean;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
      <SectionHeader
        title={title}
        description={description}
        showKnowMore={showKnowMore}
      />

      <div
        className='relative overflow-hidden md:mx-7.5 lg:mx-15'
        ref={emblaRef}
      >
        <div className='flex'>
          {items.map((item, index) => (
            <div
              key={index}
              className='mr-[12px] flex-[0_0_calc(100%-48px)] md:mr-[14px] md:flex-[0_0_calc(((100%-28px)/3))]'
            >
              <div className='relative h-[260px] w-full overflow-hidden md:h-[311px] lg:h-[389px] xl:h-[498px]'>
                <Image
                  src={item.imageUrl}
                  alt='A beautiful view'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full flex-1 flex-col bg-gray-100 px-2.5 py-6 text-center md:px-7 md:pt-7.5 md:pb-10 md:text-left'>
                <h2 className='text-[20px]/[20px] font-semibold text-gray-800 sm:text-[24px]/[24px] md:text-[28px]/[28px]'>
                  {item.title}
                </h2>
                <Divider />
                <div className='text-[13px]/[26px] sm:text-[16px]/[32px]'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <>
            <button
              className='absolute top-[220px] left-[30px] z-10 flex h-[57px] w-[57px] cursor-pointer items-center justify-center rounded-full bg-gray-800/40'
              onClick={scrollPrev}
              aria-label='Previous slide'
            >
              <svg
                width='11'
                height='22'
                viewBox='0 0 11 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.21342 11.9733L7.80277 20.8118C8.25821 21.4227 8.99467 21.4227 9.44526 20.8118L10.5403 19.3431C10.9957 18.7322 10.9957 17.7444 10.5403 17.14L5.86957 10.875L10.5403 4.61008C10.9957 3.99918 10.9957 3.01134 10.5403 2.40694L9.44526 0.938194C8.98982 0.327297 8.25336 0.327297 7.80277 0.938194L1.21342 9.7767C0.757976 10.3746 0.757976 11.3624 1.21342 11.9733Z'
                  fill='white'
                  fillOpacity='0.8'
                />
              </svg>
            </button>
            <button
              className='absolute top-[220px] right-[30px] z-10 flex h-[57px] w-[57px] cursor-pointer items-center justify-center rounded-full bg-gray-800/40'
              onClick={scrollNext}
              aria-label='Next slide'
            >
              <svg
                width='11'
                height='22'
                viewBox='0 0 11 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.7867 9.77667L3.19735 0.938154C2.74191 0.327257 2.00546 0.327256 1.55486 0.938154L0.459866 2.40691C0.00442569 3.0178 0.00442556 4.00564 0.459866 4.61004L5.13055 10.875L0.459864 17.1399C0.00442376 17.7508 0.00442363 18.7387 0.459864 19.3431L1.55486 20.8118C2.0103 21.4227 2.74676 21.4227 3.19735 20.8118L9.7867 11.9733C10.2421 11.3754 10.2421 10.3876 9.7867 9.77667Z'
                  fill='white'
                  fillOpacity='0.8'
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionGrid;
