import { UploadFile } from '@/gql/graphql';
import { EmblaCarouselType } from 'embla-carousel';
import StrapiImage from '../StrapiImage';

interface ThumbnailProps {
  image?: UploadFile | null;
  index: number;
  currentIndex: number;
  emblaApi: EmblaCarouselType | undefined;
}

const Thumbnail = ({
  image,
  index,
  currentIndex,
  emblaApi,
}: ThumbnailProps) => {
  return (
    <button
      key={index}
      className={`relative aspect-12/9 w-full cursor-pointer transition-all duration-300 ${
        index === currentIndex ? '' : 'opacity-50'
      }`}
      onClick={() => emblaApi?.scrollTo(index)}
      aria-label={`Go to slide ${index + 1}`}
    >
      {image && <StrapiImage image={image} />}
    </button>
  );
};

export default Thumbnail;
