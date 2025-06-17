import Image from 'next/image';
import { UploadFile } from '@/gql/graphql';
import FadeInOnView from '../FadeInOnView';

type ImageGridTreeProps = {
  images: UploadFile[];
};

const imageStyles = [
  'col-span-1 row-span-2 w-full h-full',
  'col-span-1 aspect-[845/884] lg:aspect-[3/2]',
  'col-span-1 aspect-[845/884] lg:aspect-[3/2]',
];

const ImageGridTree = ({ images }: ImageGridTreeProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 lg:px-10 2xl:px-15'>
      {images.map((image, index) => {
        const style = imageStyles[index % imageStyles.length];
        const imageUrl = image.url;

        if (!imageUrl) return null;

        return (
          <FadeInOnView key={index}>
            <div
              key={image.documentId || index}
              className={`relative w-full ${style}`}
            >
              <Image
                src={imageUrl}
                alt={image.alternativeText || 'Resort image'}
                fill
                className='object-cover'
              />
            </div>
          </FadeInOnView>
        );
      })}
    </div>
  );
};

export default ImageGridTree;
