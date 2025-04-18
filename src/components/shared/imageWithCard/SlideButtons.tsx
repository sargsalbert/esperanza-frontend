import { SlideLeftIcon } from '@/components/icons/slideLeftIcon';
import { SlideRightIcon } from '@/components/icons/slideRightIcon';

interface SlideButtonsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

const SlideButtons = ({ scrollPrev, scrollNext }: SlideButtonsProps) => {
  return (
    <>
      <button
        className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 md:h-[42px] md:w-[42px] xl:h-[57px] xl:w-[57px]'
        onClick={scrollPrev}
        aria-label='Previous slide'
      >
        <SlideLeftIcon className='md:h-[16px] md:w-[8px] xl:h-[22px] xl:w-[11px]' />
      </button>
      <button
        className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 md:h-[42px] md:w-[42px] xl:h-[57px] xl:w-[57px]'
        onClick={scrollNext}
        aria-label='Next slide'
      >
        <SlideRightIcon className='md:h-[16px] md:w-[8px] xl:h-[22px] xl:w-[11px]' />
      </button>
    </>
  );
};

export default SlideButtons;
