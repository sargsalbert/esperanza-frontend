'use client';
import Input from '@/components/shared/Input';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { useState } from 'react';

interface FormData {
  voucherType: string;
}

// Define event type for onChange
interface CustomChangeEvent {
  target: {
    name: string;
    value: string;
    type: string;
  };
  preventDefault: () => void;
}

export default function GiftCards() {
  const options = [
    { value: 'Print', label: 'Print' },
    { value: 'Online', label: 'Online' },
  ];

  const [formData, setFormData] = useState<FormData>({
    voucherType: '',
  });

  // Handle form input changes
  const handleChange = (
    e: CustomChangeEvent | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(`${name} changed to: ${value}`);
  };

  return (
    <>
      <PageHeader imgUrl='/resort-g1.jpg' title='Gift Cards' />

      <SectionHeader
        smallTitle='Give a moment, create a memory'
        title='Quiet Luxury, Shared'
        description='Gift moments of stillness, renewal, and escape. Our gift cards – available as both print and online vouchers – can be used for stays, spa rituals, dining experiences, or simply time well spent at Esperanza. Whether for a special celebration or a quiet gesture of care, each gift invites a journey beyond the everyday – into nature, calm, and connection.'
        showKnowMore={false}
      />

      <div className='mx-auto max-w-5xl px-5 pb-12.5 sm:pb-15 md:px-10 lg:pb-20 2xl:px-15'>
        <div className='mt-2.5 mb-7.5 sm:mt-5 sm:mb-12.5'>
          <Input placeholder='Name (recipient)' />
          <Input placeholder='Surname (recipient)' />
          <Input placeholder='Email (buyer)' />
          <Input placeholder='Amount (minimum 100 Eur)' />

          <Select
            name='voucherType'
            placeholder='Voucher type'
            options={options}
            value={formData.voucherType}
            onChange={handleChange}
          />
          {formData.voucherType === 'Online' && (
            <TextArea placeholder='Message ' />
          )}
        </div>
        <div className='flex justify-center md:justify-end'>
          <button
            // onClick={primaryButton.onClick}
            className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 lg:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className='h-12.5' />
    </>
  );
}
