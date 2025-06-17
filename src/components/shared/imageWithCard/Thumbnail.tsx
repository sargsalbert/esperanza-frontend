import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';

interface ThumbnailProps {
  src: string;
  index: number;
  currentIndex: number;
  emblaApi: EmblaCarouselType | undefined;
}

const Thumbnail = ({ src, index, currentIndex, emblaApi }: ThumbnailProps) => {
  return (
    <button
      key={index}
      className={`relative aspect-12/9 w-full cursor-pointer transition-all duration-300 ${
        index === currentIndex ? '' : 'opacity-50'
      }`}
      onClick={() => emblaApi?.scrollTo(index)}
      aria-label={`Go to slide ${index + 1}`}
    >
      <Image
        src={`${src}` || ''}
        alt={`Thumbnail ${index + 1}`}
        fill
        className='object-cover'
      />
    </button>
  );
};

export default Thumbnail;
