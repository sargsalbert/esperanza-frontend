'use client';

import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Input from './Input';

interface FooterFormProps {
  siteFooterFormPlaceholder?: string | null;
  siteFooterFormButtonText?: string | null;
  siteFooterFormSuccessMessage?: string | null;
}

interface FormValues {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const SubscribeForm = ({
  siteFooterFormPlaceholder,
  siteFooterFormButtonText,
  siteFooterFormSuccessMessage,
}: FooterFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/email-subscribers`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: values }),
        },
      );

      if (response.ok) {
        setSubmitted(true);
        resetForm();
        // setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('Submission failed', errorData);
      }
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return (
    <Formik<FormValues>
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          {submitted ? (
            <div className='w-full text-center text-[16px] font-semibold text-yellow-500 uppercase'>
              {siteFooterFormSuccessMessage}
            </div>
          ) : (
            <Form className='relative flex h-11 w-full max-w-[822px] md:h-12.5 2xl:h-15'>
              <Input
                name='email'
                type='email'
                placeholder={siteFooterFormPlaceholder || 'Your email'}
                className='h-full w-full rounded-full bg-gray-200 px-4.5 py-1 text-sm text-gray-800 placeholder-gray-300 placeholder:text-sm focus:outline-none md:px-6 md:text-base md:placeholder:text-base'
                onlyClassName={true}
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='absolute right-[4px] h-9 w-28 cursor-pointer self-center rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 md:right-[4px] md:h-10.5 md:w-38 md:text-base 2xl:right-[5px] 2xl:h-12.5 2xl:w-60 2xl:text-lg'
              >
                {isSubmitting
                  ? 'Sending...'
                  : siteFooterFormButtonText || 'Submit'}
              </button>
            </Form>
          )}
        </>
      )}
    </Formik>
  );
};

export default SubscribeForm;
