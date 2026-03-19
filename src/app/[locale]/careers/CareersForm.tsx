'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import FadeInOnView from '@/components/shared/FadeInOnView';
import Input from '@/components/shared/Input';
import TextArea from '@/components/shared/TextArea';
import { Form, Formik } from 'formik';
// FormikHelpers
import { useState } from 'react';
import UploadCV from '@/components/shared/UploadCV';
import Select from '@/components/shared/Select';

type CareersFormProps = {
  data: any;
};

// interface ContactFormValues {
//   name: string;
//   formSurname: string;
//   formPhone: string;
//   formEmail: string;
//   formDates: {
//     from?: Date | null;
//     to?: Date | null;
//   };
//   formNumberGuests: string;
//   formTextareaOne: string;
// }

export default function CareersForm({ data }: CareersFormProps) {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitted] = useState(false);

  const options = [
    { value: 'Value1', label: data?.vacanciesAccordion[0]?.title || 'a' },
    { value: 'Value2', label: data?.vacanciesAccordion[1]?.title || 'b' },
  ];

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
    formTextareaOne: Yup.string(),
  });

  const handleSubmit = () => {};

  // const handleSubmit = async (
  //   values: ContactFormValues,
  //   { resetForm }: FormikHelpers<ContactFormValues>,
  // ) => {
  //   try {
  //     const formattedValues = {
  //       ...values,
  //       formDates: {
  //         from: values.formDates?.from
  //           ? format(values.formDates.from, 'yyyy-MM-dd')
  //           : null,
  //         to: values.formDates?.to
  //           ? format(values.formDates.to, 'yyyy-MM-dd')
  //           : null,
  //       },
  //     };

  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-us-forms`,
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ data: formattedValues }),
  //       },
  //     );
  //     if (response.ok) {
  //       console.log('Message sent successfully!');
  //       setIsSubmitted(true);
  //       resetForm();
  //     } else {
  //       const errorData = await response.json();
  //       console.error(errorData);
  //       console.log('Submission failed.');
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     console.log('An error occurred.');
  //   }
  // };

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
              formTextareaOne: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnMount={true}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='mt-2.5 mb-10 sm:mt-5 sm:mb-12.5'>
                  {/* data?.vacanciesAccordion */}

                  <Select
                    name='formVoucherType'
                    // placeholder={data.giftCard?.formDelivery}
                    placeholder='Select position'
                    options={options}
                  />

                  <Input name='name' placeholder={data?.formName || ''} />
                  <Input name='formEmail' placeholder={data?.formEmail || ''} />
                  <TextArea
                    name='formTextareaOne'
                    placeholder={data?.formTextareaOne || ''}
                  />

                  <div className='mb-5 sm:mb-7.5 lg:mb-10'>
                    <UploadCV />
                  </div>
                </div>

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`h-9 min-w-full cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg`}
                  >
                    {isSubmitting ? 'Submitting...' : data?.formApplyButtonText}
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
