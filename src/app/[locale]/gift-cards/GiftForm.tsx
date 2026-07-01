'use client';

import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { Form, Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { Locale } from '../../../../i18n-config';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';

type GiftCardData = {
  formBottomNote?: unknown | null | undefined;
  formName?: string | null | undefined;
  formSurname?: string | null | undefined;
  formPhone?: string | null | undefined;
  formEmail?: string | null | undefined;
  formAmount?: string | null | undefined;
  formDelivery?: string | null | undefined;
  formDeliveryOptionPrint?: string | null | undefined;
  formDeliveryOptionOnline?: string | null | undefined;
  formButtonText?: string | null | undefined;
  heroSection?: unknown | null | undefined;
  quietLuxuryText?: unknown | null | undefined;
  formSuccessMessage?: string;
};

type GiftFormProps = {
  data: GiftCardData;
  locale: Locale;
};

interface GidtFormValues {
  formName: string;
  formSurname: string;
  formPhone: number | string;
  formEmail: string;
  formAmount: string;
  formVoucherType: string;
  formVoucherMessage: string;
}

const validationSchema = Yup.object().shape({
  formName: Yup.string()
    .max(70, 'Maximum 70 characters allowed')
    .required('Required'),
  formSurname: Yup.string()
    .max(70, 'Maximum 70 characters allowed')
    .required('Required'),
  formPhone: Yup.string()
    .max(70, 'Maximum 70 characters allowed')
    .required('Required'),
  formEmail: Yup.string()
    .email('Invalid email')
    .max(70, 'Maximum 70 characters allowed')
    .required('Required'),
  formAmount: Yup.number()
    .typeError('Amount must be a number')
    .min(150, 'Minimum amount is 150')
    .max(99999999, 'Maximum 8 digits allowed')
    .required('Required'),
  formVoucherType: Yup.string().required('Required'),
  formVoucherMessage: Yup.string(),
});

export default function GiftForm({ data, locale }: GiftFormProps) {
  const options = [
    { value: 'Print', label: data?.formDeliveryOptionPrint || 'Print' },
    { value: 'Online', label: data?.formDeliveryOptionOnline || 'Online' },
  ];

  const searchParams = useSearchParams();

  const paymentStatus = searchParams.get('status');
  const isSuccess = paymentStatus === 'success';
  const isCanceled = paymentStatus === 'canceled';

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSuccess || isCanceled) {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isSuccess, isCanceled]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isSuccess || isCanceled) {
      const timeout = setTimeout(() => {
        router.replace(pathname, { scroll: false });
      }, 20000);
      return () => clearTimeout(timeout);
    }
  }, [isSuccess, isCanceled, router, pathname]);

  const handlePurchase = async (values: GidtFormValues) => {
    const dataModel = {
      name: values.formName,
      surname: values.formSurname,
      phone: values.formPhone,
      email: values.formEmail,
      amount: values.formAmount,
      voucherType: values.formVoucherType,
      voucherMessage: values.formVoucherMessage,
      locale,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/gift-card-form/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: dataModel }),
        },
      );

      const result = await res.json();

      if (result.success && result.url) {
        window.location.href = result.url;
      } else {
        alert(result.error || 'Could not initiate payment session.');
      }
    } catch (error) {
      console.error('Payment redirect error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div ref={formRef} className='px-5 md:px-7.5 lg:px-[25%]'>
      <div className='mt-2.5 sm:mt-5'>
        {isSuccess ? (
          <div className='w-full text-center text-[20px] font-semibold text-yellow-500 lg:text-[28px]'>
            {data?.formSuccessMessage}
          </div>
        ) : (
          <Formik
            initialValues={{
              formName: '',
              formSurname: '',
              formPhone: '',
              formEmail: '',
              formAmount: '',
              formVoucherType: '',
              formVoucherMessage: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handlePurchase}
            validateOnMount={true}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <Input placeholder={data?.formName} name='formName' />
                <Input placeholder={data?.formSurname} name='formSurname' />
                <Input
                  inputType='phone'
                  placeholder={data?.formPhone}
                  name='formPhone'
                />
                <Input placeholder={data?.formEmail} name='formEmail' />
                <Input
                  placeholder={data?.formAmount}
                  inputType='number'
                  name='formAmount'
                />
                <Select
                  name='formVoucherType'
                  placeholder={data?.formDelivery}
                  options={options}
                />
                {values.formVoucherType === 'Online' && (
                  <TextArea name='formVoucherMessage' placeholder='' />
                )}

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
                  >
                    {isSubmitting ? 'Loading...' : data?.formButtonText}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
