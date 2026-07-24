'use client';

import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
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
  formFailMessage?: string;
  formVoucherMessagePlaceholder?: string;
};

type GiftFormProps = {
  data: GiftCardData;
  locale: Locale;
};

interface GiftFormValues {
  formName: string;
  formSurname: string;
  formPhone: string;
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
    .min(6, 'Phone number is too short')
    .max(30, 'Maximum 30 characters allowed')
    .required('Required'),
  formEmail: Yup.string()
    .email('Invalid email')
    .max(70, 'Maximum 70 characters allowed')
    .required('Required'),
  formAmount: Yup.number()
    .typeError('Amount must be a number')
    .min(150, 'Minimum amount is 150')
    .max(50000, 'Maximum amount is 50,000')
    .required('Required'),
  formVoucherType: Yup.string().required('Required'),
  formVoucherMessage: Yup.string().max(500, 'Maximum 500 characters allowed'),
});

const TERMINAL_FAIL_STATUSES = [
  'failed',
  'amount_mismatch',
  'capture_failed',
  'amount_mismatch_captured',
  'not_found',
];
const MAX_POLL_ATTEMPTS = 15;
const POLL_INTERVAL_MS = 2000;

export default function GiftForm({ data, locale }: GiftFormProps) {
  const options = [
    { value: 'Print', label: data?.formDeliveryOptionPrint || 'Print' },
    { value: 'Online', label: data?.formDeliveryOptionOnline || 'Online' },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const formRef = useRef<HTMLDivElement>(null);

  const hasSubmittedRef = useRef(false);

  const [status, setStatus] = useState<string | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);

  const isPollingRef = useRef(false);

  useEffect(() => {
    const orderId = searchParams.get('orderId');
    const hasError = searchParams.get('error');

    if ((orderId || hasError) && formRef.current) {
      requestAnimationFrame(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    }

    if (hasError) {
      setStatus('fail');
      router.replace(pathname, { scroll: false });
      return;
    }

    if (!orderId) return;

    if (isPollingRef.current) return;
    isPollingRef.current = true;

    let cancelled = false;
    setLoadingStatus(true);

    const finalize = (finalStatus: 'success' | 'fail') => {
      if (cancelled) return;
      setStatus(finalStatus);
      setLoadingStatus(false);
      router.replace(pathname, { scroll: false });
    };

    const checkOnce = async (): Promise<string> => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/gift-card-form/check-status?orderId=${encodeURIComponent(
          orderId,
        )}`,
      );
      const result = await res.json();
      return result?.success ? result.status : 'unknown';
    };

    const poll = async (attempt: number) => {
      if (cancelled) return;

      try {
        const currentStatus = await checkOnce();

        if (currentStatus === 'paid') {
          finalize('success');
          return;
        }

        if (TERMINAL_FAIL_STATUSES.includes(currentStatus)) {
          finalize('fail');
          return;
        }

        if (attempt + 1 >= MAX_POLL_ATTEMPTS) {
          finalize('fail');
          return;
        }

        setTimeout(() => poll(attempt + 1), POLL_INTERVAL_MS);
      } catch (err) {
        console.error('Status check failed', err);

        if (attempt + 1 >= MAX_POLL_ATTEMPTS) {
          finalize('fail');
          return;
        }

        setTimeout(() => poll(attempt + 1), POLL_INTERVAL_MS);
      }
    };

    poll(0);

    return () => {
      cancelled = true;
    };
  }, [searchParams, router, pathname]);

  const isSuccess = status === 'success';
  const isFail = status === 'fail';

  const handlePurchase = async (
    values: GiftFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;

    const dataModel = {
      name: values.formName,
      surname: values.formSurname,
      phone: values.formPhone,
      email: values.formEmail,
      amount: values.formAmount,
      voucherType: values.formVoucherType,
      voucherMessage:
        values.formVoucherType === 'Online' ? values.formVoucherMessage : '',
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
        // Saferpay Redirect
        window.location.href = result.url;
      } else {
        alert(result.error || 'Could not initiate payment session.');
        setSubmitting(false);
        hasSubmittedRef.current = false;
      }
    } catch (error) {
      console.error('Payment redirect error:', error);
      alert('An error occurred. Please try again.');
      setSubmitting(false);
      hasSubmittedRef.current = false;
    }
  };

  return (
    <div ref={formRef} className='px-5 md:px-7.5 lg:px-[25%]'>
      <div className='mt-2.5 sm:mt-5'>
        {loadingStatus && (
          <div className='w-full text-center text-[20px] font-semibold text-gray-500 lg:text-[28px]'>
            ...
          </div>
        )}

        {isSuccess && !loadingStatus && (
          <div className='w-full text-center text-[20px] font-semibold text-yellow-500 lg:text-[28px]'>
            {data?.formSuccessMessage ||
              'Thank you! Your payment was successful.'}
          </div>
        )}

        {isFail && !loadingStatus && (
          <div className='my-4 flex justify-center'>
            <button
              type='button'
              onClick={() => setStatus(null)}
              className='h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg'
            >
              {data?.formFailMessage ||
                'Payment failed or was declined. Please try again.'}
            </button>
          </div>
        )}

        {!isSuccess && !isFail && !loadingStatus && (
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
                  <TextArea
                    name='formVoucherMessage'
                    placeholder={data?.formVoucherMessagePlaceholder || ''}
                  />
                )}

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg ${
                      isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                    }`}
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
