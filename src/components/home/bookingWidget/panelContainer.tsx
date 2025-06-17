'use client';

import { useEffect, useRef } from 'react';
import { CloseIcon } from '../../icons/closeIcon';
import { MoreIcon } from '../../icons/moreIcon';

type PanelContainerProps = {
  onClose: () => void;
  children: React.ReactNode;
  step?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onFinish?: () => void;
};

export const PanelContainer: React.FC<PanelContainerProps> = ({
  onClose,
  children,
  step,
  onNext,
  onPrevious,
  onFinish,
}) => {
  const isFirst = step === 1;

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      className='absolute top-full left-0 z-30 w-full bg-gray-100 p-5 shadow-xs'
    >
      <div className='mb-5 flex justify-end'>
        <button
          type='button'
          onClick={onClose}
          className='flex cursor-pointer items-center justify-center p-1 text-sm font-medium text-gray-800'
        >
          <CloseIcon className='h-3 w-3 lg:h-4 lg:w-4' />
        </button>
      </div>

      <div className=''>{children}</div>

      <div className='mt-6 flex justify-between'>
        {!isFirst ? (
          <button
            type='button'
            onClick={onPrevious}
            className='flex cursor-pointer items-center px-1 text-sm font-semibold text-gray-800 lg:text-base'
          >
            <MoreIcon className='w-[14px] rotate-180' />
            <span className='ml-2.5'>Previous</span>
          </button>
        ) : (
          <div />
        )}

        <button
          type='button'
          onClick={onFinish ? onFinish : onNext}
          className='flex cursor-pointer items-center px-1 text-sm font-semibold text-gray-800 lg:text-base'
        >
          <span className='mr-2.5'>{onFinish ? 'Search' : 'Next'}</span>
          <MoreIcon className='w-[14px]' />
        </button>
      </div>
    </div>
  );
};
