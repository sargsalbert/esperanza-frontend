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
        className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px] 2xl:h-[54px] 2xl:w-[54px]'
        onClick={scrollPrev}
        aria-label='Previous slide'
      >
        <SlideLeftIcon className='text-gray-50 lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
      </button>
      <button
        className='flex cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/70 lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px] 2xl:h-[54px] 2xl:w-[54px]'
        onClick={scrollNext}
        aria-label='Next slide'
      >
        <SlideRightIcon className='text-gray-50 lg:h-[16px] lg:w-[8px] xl:h-[18px] xl:w-[10px] 2xl:h-[22px] 2xl:w-[11px]' />
      </button>
    </>
  );
};

export default SlideButtons;
