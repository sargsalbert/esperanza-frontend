'use client';

import React, { useEffect } from 'react';
import { CloseIcon } from '../icons/closeIcon';
import FadeInOnView from './FadeInOnView';
import StrapiImage from './StrapiImage';
import { UploadFile } from '@/gql/graphql';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  modalHeaderLogo?: UploadFile | null;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  modalHeaderLogo,
  children,
}) => {
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
          className='relative w-full bg-white shadow-xs lg:w-[984px] xl:w-[1052px]'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='relative flex justify-center p-5'>
            <div className='relative w-[131px] justify-center md:w-[179px] 2xl:w-[199px]'>
              {modalHeaderLogo && (
                <StrapiImage
                  image={modalHeaderLogo}
                  className='!object-contain'
                />
              )}
            </div>
            <button
              onClick={onClose}
              className='absolute top-4 right-4 cursor-pointer p-2 text-gray-800'
            >
              <CloseIcon className='h-3.5 w-3.5 lg:h-4.5 lg:w-4.5' />
            </button>
          </div>
          {title && <h2 className='mb-4 text-xl font-semibold'>{title}</h2>}
          <div>{children}</div>
        </div>
      </FadeInOnView>
    </div>
  );
};

export default Modal;
