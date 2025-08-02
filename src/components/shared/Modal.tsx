'use client';

import React, { useEffect } from 'react';
import { CloseIcon } from '../icons/closeIcon';
import LogoIcon from '../../../public/logo.svg';
import Image from 'next/image';
import FadeInOnView from './FadeInOnView';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-100 flex items-center justify-center bg-[rgba(83,83,83,0.5)] backdrop-blur-[1px]'
      onClick={onClose}
    >
      <FadeInOnView className='m-5'>
        <div
          className='relative w-full max-w-[1052px] bg-white shadow-xs'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='relative p-5'>
            <div className='relative h-12 md:h-20'>
              <Image src={LogoIcon} alt='' fill className='object-contain' />
            </div>
            <button
              onClick={onClose}
              className='absolute top-4 right-4 cursor-pointer p-2 text-gray-800'
            >
              <CloseIcon className='h-3.5 w-3.5 lg:h-4.5 lg:w-4.5' />
            </button>
          </div>

          {/* Title */}
          {title && <h2 className='mb-4 text-xl font-semibold'>{title}</h2>}

          {/* Content */}
          <div>{children}</div>
        </div>
      </FadeInOnView>
    </div>
  );
};

export default Modal;
