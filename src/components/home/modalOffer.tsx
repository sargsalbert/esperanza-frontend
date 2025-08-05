'use client';

import { useEffect, useState } from 'react';
import Modal from '../shared/Modal';
import StrapiImage from '../shared/StrapiImage';
import { ComponentSharedModal } from '@/gql/graphql';
import LocaleLink from '../shared/LocaleLink';
import { useIsMobile } from '@/hooks/useIsMobile';
import { usePathname } from 'next/navigation';

type ModalProps = {
  dataModal?: ComponentSharedModal | null;
};

const ModalOffer = ({ dataModal }: ModalProps) => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!dataModal?.modalIsActive) return;

    try {
      const storageType = dataModal?.modal_storage_type ?? 'localStorage';
      const storage =
        storageType === 'sessionStorage' ? sessionStorage : localStorage;

      const key = `offerModalShown_${pathname}`;
      const hasShown = storage.getItem(key);

      if (!hasShown) {
        const timer = setTimeout(() => {
          setIsModalOpen(true);
          storage.setItem(key, 'true');
        }, 3000);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.warn('Storage access error:', error);
    }
  }, [dataModal?.modalIsActive, dataModal?.modal_storage_type, pathname]);

  const button = dataModal?.modalActionButton;

  const href =
    !isMobile && button?.desktopUrl
      ? button.desktopUrl
      : button?.buttonUrl || '';

  if (!dataModal?.modalIsActive) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      modalHeaderLogo={dataModal?.modalHeaderLogo}
    >
      <div className='flex flex-col lg:flex-row lg:items-stretch'>
        <div className='relative w-full lg:w-1/2'>
          {dataModal?.modalImage && (
            <StrapiImage
              image={dataModal.modalImage}
              className='!inset-0 max-h-[200px] sm:max-h-[250px] lg:!absolute lg:max-h-none'
            />
          )}
        </div>

        <div className='flex flex-col bg-gray-100 p-[15px] pb-[30px] lg:w-1/2 lg:p-[5%]'>
          {dataModal?.modalTitle && (
            <div>
              <h2 className='mx-[10%] mb-3 flex justify-center border-b-2 border-yellow-500 pb-3 text-[20px] font-semibold text-gray-800 lg:mx-0 lg:mb-4 lg:justify-start lg:border-b-3 lg:pb-4 lg:text-[28px] xl:mb-5 xl:pb-5'>
                {dataModal.modalTitle}
              </h2>
            </div>
          )}

          <div>
            <p className='text-center text-[14px]/[26px] sm:text-[16px]/[32px] lg:text-left'>
              <span className='mr-2.5 inline-flex text-[22px] font-semibold lg:mb-5 lg:flex lg:text-[30px]'>
                {dataModal?.modalSubTitle}
              </span>
              {dataModal?.modalContent}
            </p>
          </div>

          <div className='mt-[24px] flex justify-center lg:mt-10 lg:justify-end'>
            {dataModal?.modalActionButton?.buttonText && (
              <LocaleLink
                href={href}
                target={
                  dataModal?.modalActionButton?.newTab ? '_blank' : undefined
                }
                className='flex w-60 cursor-pointer items-center justify-center rounded-[30px] bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-50 md:text-base lg:min-h-11 lg:text-nowrap 2xl:min-h-12.5 2xl:text-lg'
              >
                {dataModal.modalActionButton.buttonText}
              </LocaleLink>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOffer;
