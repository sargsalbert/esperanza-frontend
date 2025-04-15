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
      className={`h-21 w-28 cursor-pointer overflow-hidden transition-all duration-300 ${
        index === currentIndex ? '' : 'opacity-50'
      }`}
      onClick={() => emblaApi?.scrollTo(index)}
      aria-label={`Go to slide ${index + 1}`}
    >
      <div className='relative h-full w-full'>
        <Image
          src={src || '/placeholder.svg'}
          alt={`Thumbnail ${index + 1}`}
          fill
          className='object-cover'
        />
      </div>
    </button>
  );
};

export default Thumbnail;
