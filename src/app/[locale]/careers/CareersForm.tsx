'use client';

import * as Yup from 'yup';
import FadeInOnView from '@/components/shared/FadeInOnView';
import Input from '@/components/shared/Input';
import TextArea from '@/components/shared/TextArea';
import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import UploadCV from '@/components/shared/UploadCV';
import Select from '@/components/shared/Select';
import { LoadingIcon } from '@/components/icons/Loading';
import StrapiRichTextRenderer from '@/components/shared/StrapiRichTextRenderer';

type Vacancy = {
  title: string;
};

type CareersFormData = {
  vacanciesAccordion?: Vacancy[];
  formSuccessText?: string;
  formName?: string;
  formEmail?: string;
  formTextareaOne?: string;
  formApplyButtonText?: string;
  formUploadButtonText?: string;
  formFooterText?: string;
  formSelectPlaceholder?: string;
};

type CareersFormProps = {
  data: CareersFormData;
};

interface ContactFormValues {
  formPosition: string;
  formName: string;
  formEmail: string;
  formTextareaOne: string;
}

export default function CareersForm({ data }: CareersFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const options =
    data?.vacanciesAccordion?.map((item) => ({
      value: item.title,
      label: item.title,
    })) || [];

  const validationSchema = Yup.object({
    formPosition: Yup.string().required('Required'),
    formName: Yup.string()
      .max(70, 'Maximum 70 characters allowed')
      .required('Required'),
    formEmail: Yup.string().email('Invalid email').required('Required'),
    formTextareaOne: Yup.string(),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    setError(null);

    if (!file) {
      setError(`Required ${data?.formUploadButtonText || 'CV upload'}`);
      return;
    }

    const formData = new FormData();
    formData.append('data', JSON.stringify(values));

    if (file) {
      formData.append('cv', file);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/careers-forms`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || 'Submission failed');
      }

      setIsSubmitted(true);
      setFile(null);
      resetForm();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <FadeInOnView>
      {isSubmitted ? (
        <div className='p-5 text-center text-[30px] font-semibold text-yellow-500 uppercase'>
          {data?.formSuccessText || ''}
        </div>
      ) : (
        <div className='px-5 pb-12.5 sm:pb-15 md:px-7.5 lg:px-[25%] lg:pb-20'>
          <Formik
            initialValues={{
              formPosition: '',
              formName: '',
              formEmail: '',
              formTextareaOne: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='mt-5 mb-10'>
                  <Select
                    name='formPosition'
                    placeholder={data?.formSelectPlaceholder || ''}
                    options={options}
                  />

                  <Input name='formName' placeholder={data?.formName || ''} />
                  <Input name='formEmail' placeholder={data?.formEmail || ''} />
                  <TextArea
                    maxLength={500}
                    name='formTextareaOne'
                    placeholder={data?.formTextareaOne || ''}
                  />

                  <div className='mb-6'>
                    <UploadCV
                      file={file}
                      setFile={setFile}
                      formUploadButtonText={data?.formUploadButtonText || ''}
                      setError={setError}
                    />
                  </div>

                  {error && (
                    <div className='mb-4 text-sm text-red-500'>{error}</div>
                  )}
                </div>

                <div className='flex justify-center lg:justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='h-10 min-w-full cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 text-sm font-semibold text-white disabled:opacity-50'
                  >
                    {isSubmitting ? (
                      <div className='flex items-center justify-center'>
                        <LoadingIcon className='size-5 animate-spin text-white' />
                      </div>
                    ) : (
                      data?.formApplyButtonText || ''
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {data?.formFooterText && (
            <div className='mt-10'>
              <StrapiRichTextRenderer
                content={data.formFooterText}
                customListStyles={false}
              />
            </div>
          )}
        </div>
      )}
    </FadeInOnView>
  );
}
