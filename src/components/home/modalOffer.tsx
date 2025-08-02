'use client';

import { useEffect, useState } from 'react';
import Modal from '../shared/Modal';
import StrapiImage from '../shared/StrapiImage';
import { UploadFile } from '@/gql/graphql';

type ModalProps = {
  heroImage?: UploadFile | null;
};

const ModalOffer = ({ heroImage }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className='flex flex-col lg:flex-row lg:items-stretch'>
        {/* Image Section */}
        <div className='relative w-full lg:w-1/2'>
          {heroImage && (
            <StrapiImage
              image={heroImage}
              className='!inset-0 max-h-[200px] sm:max-h-[250px] lg:!absolute lg:max-h-none'
            />
          )}
        </div>

        {/* Text Section */}
        <div className='flex flex-col bg-gray-100 p-[15px] pb-[30px] lg:w-1/2 lg:p-[5%]'>
          <div>
            <h2 className='mx-[10%] mb-3 flex justify-center border-b-2 border-yellow-500 pb-3 text-[20px] font-semibold text-gray-800 uppercase lg:mx-0 lg:mb-4 lg:justify-start lg:border-b-3 lg:pb-4 lg:text-[28px] xl:mb-5 xl:pb-5'>
              special offer
            </h2>
          </div>
          <div>
            <p className='text-center text-[14px]/[26px] sm:text-[16px]/[32px] lg:text-left'>
              <span className='mr-2.5 inline-flex text-2xl font-semibold lg:mb-5 lg:flex lg:text-4xl'>
                20%Sale
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>
          <div className='mt-[24px] flex justify-center lg:mt-10 lg:justify-end'>
            <button className='w-60 cursor-pointer rounded-[30px] bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-50 md:text-base lg:min-h-11 lg:text-nowrap 2xl:min-h-12.5 2xl:text-lg'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOffer;
