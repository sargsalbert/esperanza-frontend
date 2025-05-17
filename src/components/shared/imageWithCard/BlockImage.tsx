import Image from 'next/image';
import { EmblaViewportRefType } from 'embla-carousel-react';
import { Maybe, UploadFile } from '@/gql/graphql';

interface BlockImageProps {
  emblaRef: EmblaViewportRefType;
  images: Maybe<UploadFile>[];
}

const BlockImage = ({ emblaRef, images }: BlockImageProps) => {
  return (
    <div
      className='relative shrink-0 overflow-hidden lg:h-auto lg:w-[calc(50%+80px)] xl:w-[calc(55%+80px)] 2xl:w-[calc(60%+120px)]'
      ref={emblaRef}
    >
      <div className='flex h-full w-full'>
        {images?.map((image, index) => (
          <div
            key={index}
            className='relative aspect-4/3 w-full min-w-0 flex-[0_0_100%] sm:aspect-4/2 lg:aspect-5/3'
          >
            <Image
              src={image?.url || ''}
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
