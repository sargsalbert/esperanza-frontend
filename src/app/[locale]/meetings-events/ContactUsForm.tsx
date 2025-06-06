'use client';

import * as Yup from 'yup';
import FadeInOnView from '@/components/shared/FadeInOnView';
import Input from '@/components/shared/Input';
import TextArea from '@/components/shared/TextArea';
import { MeetingsAndEventQuery } from '@/gql/graphql';
import { Form, Formik, FormikHelpers } from 'formik';
import { DatePicker } from '@/components/shared/DatePicker';
import { useState } from 'react';

type ContactUsFormProps = {
  data: MeetingsAndEventQuery;
};

interface ContactFormValues {
  name: string;
  formSurname: string;
  formPhone: string;
  formEmail: string;
  formDates: string;
  formNumberGuests: string;
  formMessage: string;
}

export default function ContactUsForm({ data }: ContactUsFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    formSurname: Yup.string().required('Required'),
    formPhone: Yup.string().required('Required'),
    formEmail: Yup.string().email('Invalid email').required('Required'),
    formDates: Yup.array()
      .min(1, 'Please select at least one date')
      .required('Required'),
    formNumberGuests: Yup.number()
      .min(1, 'At least 1 guest')
      .required('Required'),
    formMessage: Yup.string(),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-us-forms`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: values }),
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
          {data.meetingsAndEvent?.formSuccessText}
        </div>
      ) : (
        <div className='mx-auto max-w-5xl px-5 pb-12.5 sm:pb-15 md:px-10 lg:pb-20 2xl:px-15'>
          <Formik
            initialValues={{
              name: '',
              formSurname: '',
              formPhone: '',
              formEmail: '',
              formDates: '',
              formNumberGuests: '',
              formMessage: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <div className='mt-2.5 mb-10 sm:mt-5 sm:mb-12.5'>
                  <Input
                    name='name'
                    placeholder={data.meetingsAndEvent?.formName || ''}
                  />
                  <Input
                    name='formSurname'
                    placeholder={data.meetingsAndEvent?.formSurname || ''}
                  />
                  <Input
                    name='formPhone'
                    placeholder={data.meetingsAndEvent?.formPhone || ''}
                  />
                  <Input
                    name='formEmail'
                    placeholder={data.meetingsAndEvent?.formEmail || ''}
                  />

                  <DatePicker
                    name='formDates'
                    placeholder={data.meetingsAndEvent?.formDates || ''}
                  />

                  <Input
                    name='formNumberGuests'
                    placeholder={data.meetingsAndEvent?.formNumberGuests || ''}
                    type='number'
                  />
                  <TextArea
                    name='formMessage'
                    placeholder={data.meetingsAndEvent?.formMessage || ''}
                  />
                </div>

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting || !isValid}
                    className={`h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
                  >
                    {isSubmitting
                      ? 'Submitting...'
                      : data.meetingsAndEvent?.formButtonText}
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
