import Image from 'next/image';
import { RoomFeature } from './types';
import { EmblaViewportRefType } from 'embla-carousel-react';

interface BlockImageProps {
  emblaRef: EmblaViewportRefType;
  features: RoomFeature[];
}

const BlockImage = ({ emblaRef, features }: BlockImageProps) => {
  return (
    <div
      className='relative shrink-0 overflow-hidden lg:h-auto lg:w-[calc(50%+80px)] xl:w-[calc(55%+80px)] 2xl:w-[calc(60%+120px)]'
      ref={emblaRef}
    >
      <div className='flex h-full w-full'>
        {features?.map((feature) => (
          <div
            key={feature.id}
            className='relative aspect-4/3 w-full min-w-0 flex-[0_0_100%] sm:aspect-5/3'
          >
            <Image
              src={feature.image || '/placeholder.svg'}
              alt={`image`}
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockImage;
