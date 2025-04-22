'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Thumbnail from './Thumbnail';
import SlideButtons from './SlideButtons';
import { ImageWithOverlayCardProps } from './types';
import TextBlock from './TextBlock';

const ImageWithCard = ({
  features,
  imageFirst = false,
  title,
  tabs,
  primaryButton,
  secondaryButton,
  uiType,
}: ImageWithOverlayCardProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [collapseType, setCollapseType] = useState(true);

  const handleCollapse = () => {
    setCollapseType(!collapseType);
  };

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
    <>
      {uiType === 'collapse' && (
        <div onClick={handleCollapse} className='bg-gray-100 px-8'>
          <h2 className='cursor-pointer border-b-2 border-gray-200 py-4 text-center text-[20px]/[24px] font-semibold text-gray-800 uppercase md:hidden'>
            {title}
          </h2>
        </div>
      )}

      <div
        className={`relative flex w-full ${uiType === 'collapse' && collapseType ? 'hidden md:flex' : 'flex'} flex-col-reverse overflow-hidden ${imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        <TextBlock
          imageFirst={imageFirst}
          title={title}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          secondaryButton={secondaryButton}
          primaryButton={primaryButton}
          uiType={uiType}
        />
        <div
          className={`relative z-20 mx-auto -mt-[83px] block max-w-[calc(100%-40px)] ${uiType === 'collapse' ? 'hidden' : 'md:hidden'}`}
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
          className='relative h-[318px] shrink-0 overflow-hidden md:h-auto md:w-[calc(60%+40px)] 2xl:w-[calc(60%+60px)]'
          ref={emblaRef}
        >
          <div className='flex h-full w-full'>
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
        </div>
        <div
          className={`absolute top-1/2 z-30 hidden -translate-y-1/2 justify-between md:flex md:w-[calc(60%-40px)] md:px-[40px] 2xl:w-[calc(60%-60px)] 2xl:px-[60px] ${imageFirst ? 'left-0' : 'right-0'}`}
        >
          <SlideButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
        </div>
      </div>
      <div
        className={`mt-9.5 hidden justify-end md:flex ${imageFirst ? 'flex-row-reverse' : 'flex-row'} `}
      >
        <div
          className={`flex space-x-[5px] ${imageFirst ? 'justify-end md:w-[calc(60%-40px)] 2xl:w-[calc(60%-60px)]' : 'justify-start md:w-[calc(60%-40px)] 2xl:w-[calc(60%-60px)]'} `}
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
    </>
  );
};

export default ImageWithCard;
