import Image from 'next/image';
import { UploadFile } from '@/gql/graphql';
import FadeInOnView from '../shared/FadeInOnView';

type ImageGridTreeProps = {
  images: UploadFile[];
};

const imageStyles = ['col-span-2 aspect-8/3', 'aspect-[3/4]', 'aspect-[3/4]'];

const ImageGridTree = ({ images }: ImageGridTreeProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 2xl:px-15'>
      {images.map((image, index) => {
        const style = imageStyles[index % imageStyles.length];
        const imageUrl = image.url;

        if (!imageUrl) return null;

        return (
          <FadeInOnView
            key={image.documentId || index}
            className={`relative w-full ${style}`}
          >
            <Image
              src={imageUrl}
              alt={image.alternativeText || 'Resort image'}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </FadeInOnView>
        );
      })}
    </div>
  );
};

export default ImageGridTree;
