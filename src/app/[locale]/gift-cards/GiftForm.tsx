'use client';

import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import TextArea from '@/components/shared/TextArea';
import { GiftCardQuery } from '@/gql/graphql';
import { Form, Formik } from 'formik';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useRef, useState } from 'react';
import { Locale } from '../../../../i18n-config';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';

type GiftFormProps = {
  data: GiftCardQuery;
  locale: Locale;
};

interface GidtFormValues {
  formName: string,
  formSurname: string,
  formPhone: number | string,
  formEmail: string,
  formAmount: string,
  voucherType: string,
}

const validationSchema = Yup.object().shape({
  formName: Yup.string().required('Required'),
  formSurname: Yup.string().required('Required'),
  formPhone: Yup.string().required('Required'),
  formEmail: Yup.string().email('Invalid email').required('Required'),
  formAmount: Yup.number()
    .typeError('Amount must be a number')
    .min(150, 'Minimum amount is 150')
    .required('Required'),
  voucherType: Yup.string().required('Required'),
});


export default function GiftForm({ data, locale }: GiftFormProps) {
  const options = [
    { value: 'Print', label: 'Print' },
    { value: 'Online', label: 'Online' },
  ];

  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  const session_id = searchParams.get('session_id');

  const [sessionData, setSessionData] = useState<GidtFormValues>();

  useEffect(() => {
    if (success && session_id) {
      const fetchData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/create-checkout-session?session_id=${session_id}`);
        const data = await res.json();
        setSessionData(data);
      };
      fetchData();
    }
  }, [success, session_id]);


  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (success || canceled) {
      formRef.current?.scrollIntoView({
        behavior: 'smooth', block: 'nearest',
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


  const stripePromise = loadStripe('pk_test_51ReGaTQUvsZF4dcfMDZLJ6TD3ggtIh98hzN5m24vlQoQzMO3OlfmRMfkU2PBImr2VHfuai9UT9c7GDqX7blBhegd00t03DvLXw'); // public key

  const handlePurchase = async (values: GidtFormValues) => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: values.formName, surname: values.formSurname, email: values.formEmail, amount: values.formAmount, locale }),
    });

    const data = await res.json();

    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    }
  };


  return (
    <div ref={formRef} className='mx-auto max-w-5xl px-5 md:px-10 2xl:px-15'>
      <div className='mt-2.5 sm:mt-5'>
        {success && sessionData ?
          <div className="w-full text-center text-[20px] lg:text-[28px] font-semibold text-yellow-500">
            Your gift card has been successfully processed.
          </div> :
          <Formik
            initialValues={{
              formName: '',
              formSurname: '',
              formPhone: '',
              formEmail: '',
              formAmount: '',
              voucherType: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handlePurchase}
            validateOnMount={true}
          >
            {({ values, isSubmitting, isValid }) => (
              <Form>
                <Input placeholder={data.giftCard?.formName} name='formName' />
                <Input
                  placeholder={data.giftCard?.formSurname}
                  name='formSurname'
                />
                <Input type='number' placeholder={data.giftCard?.formPhone} name='formPhone' />
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
        }
      </div>
    </div>
  );
}
