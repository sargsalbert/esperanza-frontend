'use client';

import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { GiftCardQuery } from '@/gql/graphql';
import { Form, Formik } from 'formik';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useRef } from 'react';
import { Locale } from '../../../../i18n-config';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';

type GiftFormProps = {
  data: GiftCardQuery;
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
    { value: 'Print', label: data.giftCard?.formDeliveryOption1 || 'Print' },
    { value: 'Online', label: data.giftCard?.formDeliveryOption2 || 'Online' },
  ];

  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (success || canceled) {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [success, canceled]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (success || canceled) {
      const timeout = setTimeout(() => {
        router.replace(pathname, { scroll: false });
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [success, canceled, router, pathname]);

  const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`,
  );

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

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/gift-card-form/create-checkout-session`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: dataModel }),
      },
    );

    const data = await res.json();
    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    }
  };

  return (
    <div ref={formRef} className='px-5 md:px-7.5 lg:px-[25%]'>
      <div className='mt-2.5 sm:mt-5'>
        {success ? (
          <div className='w-full text-center text-[20px] font-semibold text-yellow-500 lg:text-[28px]'>
            Your gift card has been successfully processed.
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
                <Input placeholder={data.giftCard?.formName} name='formName' />
                <Input
                  placeholder={data.giftCard?.formSurname}
                  name='formSurname'
                />
                <Input
                  inputType='phone'
                  placeholder={data.giftCard?.formPhone}
                  name='formPhone'
                />
                <Input
                  placeholder={data.giftCard?.formEmail}
                  name='formEmail'
                />
                <Input
                  placeholder={data.giftCard?.formAmount}
                  inputType='number'
                  name='formAmount'
                />
                <Select
                  name='formVoucherType'
                  placeholder={data.giftCard?.formDelivery}
                  options={options}
                />
                {values.formVoucherType === 'Online' && (
                  <TextArea
                    name='formVoucherMessage'
                    placeholder={data.giftCard?.formDeliveryOption2}
                  />
                )}

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
                  >
                    {data.giftCard?.formButtonText}
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
