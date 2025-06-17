'use client';

import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { GiftCardQuery } from '@/gql/graphql';
import { Form, Formik } from 'formik';

type GiftFormProps = {
  data: GiftCardQuery;
};

export default function GiftForm({ data }: GiftFormProps) {
  const options = [
    { value: 'Print', label: 'Print' },
    { value: 'Online', label: 'Online' },
  ];

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className='mx-auto max-w-5xl px-5 md:px-10 2xl:px-15'>
      <div className='mt-2.5 sm:mt-5'>
        <Formik
          initialValues={{
            formName: '',
            formSurname: '',
            formPhone: '',
            formEmail: '',
            formAmount: '',
            voucherType: '',
          }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting, isValid }) => (
            <Form>
              <Input placeholder={data.giftCard?.formName} name='formName' />
              <Input
                placeholder={data.giftCard?.formSurname}
                name='formSurname'
              />
              <Input placeholder={data.giftCard?.formPhone} name='formPhone' />
              <Input placeholder={data.giftCard?.formEmail} name='formEmail' />
              <Input
                placeholder={data.giftCard?.formAmount}
                name='formAmount'
              />

              <Select
                name='voucherType'
                placeholder={data.giftCard?.formDelivery}
                options={options}
              />

              {values.voucherType === 'Online' && (
                <TextArea
                  placeholder={data.giftCard?.formDeliveryOption2}
                  name='formMessage'
                />
              )}

              <div className='flex justify-center lg:justify-end'>
                <button
                  // onClick={primaryButton.onClick}
                  type='submit'
                  disabled={isSubmitting || !isValid}
                  className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
                >
                  {data.giftCard?.formButtonText}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
