'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import FadeInOnView from '@/components/shared/FadeInOnView';
import Input from '@/components/shared/Input';
import TextArea from '@/components/shared/TextArea';
import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { Locale } from '../../../../i18n-config';
import { DatePicker } from '@/components/shared/DatePicker';
import { format } from 'date-fns';

type ContactUsFormProps = {
  data: any;
  locale: Locale;
};

interface ContactFormValues {
  name: string;
  formSurname: string;
  formPhone: string;
  formEmail: string;
  formDates: {
    from?: Date | null;
    to?: Date | null;
  };
  formNumberGuests: string;
  formMessage: string;
}

export default function ContactUsForm({ data, locale }: ContactUsFormProps) {
  console.log('ContactUsForm data:', data);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(70, 'Maximum 70 characters allowed')
      .required('Required'),
    formSurname: Yup.string()
      .max(70, 'Maximum 70 characters allowed')
      .required('Required'),
    formPhone: Yup.string()
      .max(70, 'Maximum 70 characters allowed')
      .required('Required'),
    formEmail: Yup.string()
      .max(70, 'Maximum 70 characters allowed')
      .email('Invalid email')
      .required('Required'),
    formDates: Yup.object({
      from: Yup.date().nullable().notRequired(),
      to: Yup.date().nullable().notRequired(),
    }),
    formNumberGuests: Yup.number()
      .min(1, 'At least 1 guest')
      .max(99999999, 'Maximum 8 digits allowed')
      .required('Required'),
    formMessage: Yup.string(),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      const formattedValues = {
        ...values,
        formDates: {
          from: values.formDates?.from
            ? format(values.formDates.from, 'yyyy-MM-dd')
            : null,
          to: values.formDates?.to
            ? format(values.formDates.to, 'yyyy-MM-dd')
            : null,
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-us-forms`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: formattedValues }),
        },
      );
      if (response.ok) {
        console.log('Message sent successfully!');
        setIsSubmitted(true);
        resetForm();
      } else {
        const errorData = await response.json();
        console.error(errorData);
        console.log('Submission failed.');
      }
    } catch (err) {
      console.error(err);
      console.log('An error occurred.');
    }
  };

  return (
    <FadeInOnView>
      {isSubmitted ? (
        <div className='p-5 text-center text-[30px] font-semibold text-yellow-500 uppercase'>
          {data?.formSuccessText}
        </div>
      ) : (
        <div className='px-5 pb-12.5 sm:pb-15 md:px-7.5 lg:px-[25%] lg:pb-20'>
          <Formik
            initialValues={{
              name: '',
              formSurname: '',
              formPhone: '',
              formEmail: '',
              formDates: {},
              formNumberGuests: '',
              formMessage: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnMount={true}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='mt-2.5 mb-10 sm:mt-5 sm:mb-12.5'>
                  <Input name='name' placeholder={data?.formName || ''} />
                  <Input
                    name='formSurname'
                    placeholder={data?.formSurname || ''}
                  />
                  <Input
                    name='formPhone'
                    inputType='phone'
                    placeholder={data?.formPhone || ''}
                  />
                  <Input name='formEmail' placeholder={data?.formEmail || ''} />
                  <DatePicker
                    name='formDates'
                    placeholder={data?.formDates || ''}
                    currentLanguage={locale}
                    mode='range'
                    showInput
                    footer
                    textData={{
                      resetButtonText: data?.formCalendarResetButtonText,
                      doneButtonText: data?.formCalendarDoneButtonText,
                    }}
                  />
                  <Input
                    name='formNumberGuests'
                    inputType='number'
                    placeholder={data?.formNumberGuests || ''}
                  />
                  <TextArea
                    name='formMessage'
                    placeholder={data?.formMessage || ''}
                  />
                </div>

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
                  >
                    {isSubmitting ? 'Submitting...' : data?.formButtonText}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </FadeInOnView>
  );
}
