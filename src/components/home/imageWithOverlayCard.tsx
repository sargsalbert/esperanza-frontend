'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SlideLeftIcon } from '../icons/slideLeftIcon';
import { SlideRightIcon } from '../icons/slideRightIcon';
import { ComponentSharedTextImageSliderBlock } from '@/gql/graphql';
import FadeInOnView from '../shared/FadeInOnView';
import StrapiImage from '../shared/StrapiImage';
import { useEqualHeightGroup } from '@/hooks/useEqualHeightGroup';

export interface RoomFeature {
  id: number;
  title: string;
  description: string;
  image: { url: string };
}

export interface ImageWithOverlayCardProps {
  features?: (ComponentSharedTextImageSliderBlock | null)[] | null;
  imageFirst?: boolean;
}

const ImageWithOverlayCard = ({
  features,
  imageFirst = false,
}: ImageWithOverlayCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const { refCallback, minHeight } = useEqualHeightGroup<HTMLDivElement>();

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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX || !touchStartY) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const xDiff = touchStartX - touchEndX;
    const yDiff = touchStartY - touchEndY;

    // Only trigger if horizontal swipe is greater than vertical swipe (to avoid scrolling conflicts)
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 30) {
      if (xDiff > 0) {
        scrollNext();
      } else {
        scrollPrev();
      }
    }

    setTouchStartX(0);
    setTouchStartY(0);
  };

  if (!features || features.length === 0) {
    return <div className='p-4 text-center'>No images to display</div>;
  }

  return (
    <FadeInOnView>
      <div
        className={`relative flex w-full flex-col-reverse overflow-hidden ${imageFirst ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        <div
          className={`z-10 flex shrink-0 flex-col ${'w-[calc(100%-40px)] md:w-[calc(100%-60px)] lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'} justify-between self-center bg-gray-100 px-2.5 pt-4 pb-5 shadow-xs md:p-6 lg:self-stretch lg:p-7 xl:p-8 2xl:self-center ${
            imageFirst
              ? 'lg:my-[10%] lg:mr-10 lg:-ml-30 2xl:mr-15 2xl:-ml-45'
              : 'lg:my-[10%] lg:-mr-30 lg:ml-10 2xl:-mr-45 2xl:ml-15'
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className='relative flex flex-col justify-center'>
            <div className='block text-center lg:text-left'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    minHeight: minHeight ? `${minHeight}px` : undefined,
                  }}
                  className={`flex flex-col justify-start transition-opacity duration-500 ease-in-out ${
                    index === currentIndex
                      ? 'pointer-events-auto opacity-100'
                      : 'pointer-events-none absolute top-0 left-0 w-full opacity-0'
                  }`}
                >
                  <div className='lg:min-h-[12rem]' ref={refCallback(index)}>
                    <h2 className='mb-3 flex min-w-auto justify-center border-b-2 border-yellow-500 pb-3 text-[18px] font-semibold text-gray-800 uppercase lg:mb-4 lg:min-w-[330px] lg:justify-start lg:border-b-3 lg:pr-5 lg:pb-4 lg:text-[22px] xl:mb-5 xl:pr-6 xl:pb-5 xl:text-[28px]'>
                      {feature?.title}
                    </h2>

                    <div className='text-center text-[14px] leading-[2em] text-gray-900 sm:text-base lg:text-left'>
                      {feature?.description}
                    </div>
                  </div>
                </div>
              ))}
              <div className='relative z-20 mt-auto -mb-[12px] hidden justify-end pt-4 lg:flex lg:gap-3 xl:gap-4 2xl:gap-5'>
                <button
                  className='inline-flex cursor-pointer p-2.5'
                  aria-label='Previous slide'
                  onClick={scrollPrev}
                >
                  <SlideLeftIcon className='text-gray-800 lg:h-[16px] lg:w-[10px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
                </button>
                <button
                  className='inline-flex cursor-pointer p-2.5'
                  onClick={scrollNext}
                  aria-label='Next slide'
                >
                  <SlideRightIcon className='text-gray-800 lg:h-[16px] lg:w-[10px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative z-20 mx-auto -mt-[73px] block max-w-[calc(100%-40px)] md:-mt-[81px] lg:hidden`}
        >
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
        </div>
        <div
          className='relative shrink-0 overflow-hidden lg:h-auto lg:w-[calc(50%+80px)] xl:w-[calc(55%+80px)] 2xl:w-[calc(60%+120px)]'
          ref={emblaRef}
        >
          <div className='flex h-full w-full'>
            {features?.map((feature, i) => (
              <div
                key={i}
                className='relative aspect-4/3 w-full min-w-0 flex-[0_0_100%] sm:aspect-4/2 lg:aspect-5/3'
              >
                {feature?.image && <StrapiImage image={feature.image} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInOnView>
  );
};

export default ImageWithOverlayCard;
