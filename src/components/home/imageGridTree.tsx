import { UploadFile } from '@/gql/graphql';
import FadeInOnView from '../shared/FadeInOnView';
import StrapiImage from '../shared/StrapiImage';

type ImageGridTreeProps = {
  images: UploadFile[];
};

const imageStyles = ['col-span-2 aspect-8/3', 'aspect-[3/4]', 'aspect-[3/4]'];

const ImageGridTree = ({ images }: ImageGridTreeProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className='mb-12.5 grid grid-cols-2 gap-1.5 px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 lg:px-[14.5%]'>
      {images.map((image, index) => {
        const style = imageStyles[index % imageStyles.length];

        if (!image) return null;

        return (
          <FadeInOnView
            key={image.documentId || index}
            className={`relative w-full ${style}`}
          >
            <StrapiImage image={image} />
          </FadeInOnView>
        );
      })}
    </div>
  );
};

export default ImageGridTree;
