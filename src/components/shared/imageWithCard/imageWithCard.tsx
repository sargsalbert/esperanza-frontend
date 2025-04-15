'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SlideLeftIcon } from '../../icons/slideLeftIcon';
import { SlideRightIcon } from '../../icons/slideRightIcon';
import Tabs from './Tabs';
import Thumbnail from './Thumbnail';
import Actions from './Actions';

export interface RoomFeature {
  id: number;
  image: string;
}

export interface TabsData {
  id: number;
  tabName: string;
  tabContent: string;
}

export interface ButtonConfig {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

interface ImageWithOverlayCardProps {
  tabs: TabsData[];
  features: RoomFeature[];
  imageFirst?: boolean;
  title: string;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

const ImageWithCard = ({
  features,
  imageFirst = false,
  title,
  tabs,
  primaryButton,
  secondaryButton,
}: ImageWithOverlayCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 641);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
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

  if (!features || features.length === 0) {
    return <div className='p-4 text-center'>No images to display</div>;
  }

  return (
    <div className='relative w-full overflow-hidden'>
      {isMobile ? (
        // Mobile Layout
        <div className='relative'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {features?.map((feature) => (
                <div className='min-w-0 flex-[0_0_100%]' key={feature.id}>
                  <div className='relative'>
                    <div className='relative h-[318px] w-full'>
                      <Image
                        src={feature.image || '/placeholder.svg'}
                        alt={`${title} image`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative z-20 mx-auto -mt-[83px] max-w-[calc(100%-40px)]'>
            <div className='mb-3.5 flex justify-center'>
              {features?.map((_, index) => (
                <button
                  key={index}
                  className={`mx-2 h-[3px] w-7 transition-all duration-300 ${
                    index === currentIndex ? 'bg-gray-50' : 'bg-[#B8B8B899]'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className='bg-gray-100 px-2.5 py-6 text-center shadow-xs'>
              <h2 className='mb-4 text-xl leading-6 font-semibold text-gray-800'>
                {title}
              </h2>
              <div className='flex'>
                <div className='mx-auto mb-5 flex h-0.5 basis-[305px] bg-yellow-500 sm:h-[3px] sm:w-[325px]' />
              </div>

              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <Actions
                secondaryButton={secondaryButton}
                primaryButton={primaryButton}
              />
            </div>
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div
          className={`flex h-[562px] md:h-[678px] ${imageFirst ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div
            className={`absolute z-[19] flex min-h-[260px] w-[582px] flex-col justify-between self-center bg-gray-100 px-5 pt-6 pb-2.5 shadow-xs md:min-h-[518px] md:w-[642px] md:px-10 md:pt-12 md:pb-7.5 ${
              imageFirst ? 'right-7.5 lg:right-15' : 'left-7.5 lg:left-15'
            }`}
          >
            <div className='relative flex flex-col justify-center'>
              <div>
                <h2 className='mb-4 inline-block min-w-[325px] border-b-3 border-[#B5946E] pr-4 pb-4 text-[24px]/[24px] font-semibold text-gray-800 md:mb-7.5 md:pb-7.5 md:text-[28px]/[28px]'>
                  {title}
                </h2>
              </div>
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <Actions
              secondaryButton={secondaryButton}
              primaryButton={primaryButton}
            />
          </div>

          <div
            className='relative overflow-hidden sm:w-[calc(100%-267px)] lg:w-[calc(100%-533px)]'
            ref={emblaRef}
          >
            <div className='flex h-full'>
              {features?.map((feature) => (
                <div
                  key={feature.id}
                  className='relative h-full min-w-0 flex-[0_0_100%]'
                >
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={`${title} image`}
                    fill
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
            <div
              className={`absolute top-1/2 z-30 flex w-full -translate-y-1/2 justify-between ${imageFirst ? 'pr-[219px] pl-[50px]' : 'pr-[50px] pl-[219px]'}`}
            >
              <button
                className='flex h-[57px] w-[57px] cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70'
                onClick={scrollPrev}
                aria-label='Previous slide'
              >
                <SlideLeftIcon />
              </button>
              <button
                className='flex h-[57px] w-[57px] cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70'
                onClick={scrollNext}
                aria-label='Next slide'
              >
                <SlideRightIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div
          className={`mt-9.5 flex justify-end ${imageFirst ? 'flex-row-reverse' : 'flex-row'} `}
        >
          <div
            className={`flex w-[calc(100%-702px)] space-x-[5px] ${imageFirst ? 'justify-end' : 'justify-start'} `}
          >
            {features?.map((feature, index) => (
              <Thumbnail
                key={index}
                src={feature.image}
                index={index}
                currentIndex={currentIndex}
                emblaApi={emblaApi}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithCard;
