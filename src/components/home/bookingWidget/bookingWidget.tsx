'use client';

import { ComponentSharedBookingWidgetInput } from '@/gql/graphql';
import { DatePicker, formatRange } from '../../shared/DatePicker';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import GuestCounter from './guestCounter';
import { PanelContainer } from './panelContainer';
import BookingSelectorGroup from './bookingSelectorGroup';
import { useIsMobile } from '@/hooks/useIsMobile';
import { buildRedirectUrl } from './synxisParameters';

type BookingWidgetProps = {
  data?: ComponentSharedBookingWidgetInput | null;
};

export interface ContactFormValues {
  formDates: DateRange | undefined;
  adults: number;
  children: number;
  // rooms: number;
}

const BookingWidget = ({ data }: BookingWidgetProps) => {
  const isMobile = useIsMobile();

  const [openPanel, setOpenPanel] = useState<'dates' | 'guests' | null>(null);

  const handleRedirect = (values: ContactFormValues) => {
    console.log(values, 'v');
    window.open(buildRedirectUrl(values), '_blank');
    setOpenPanel(null);
  };

  return (
    <>
      <div className='absolute right-0 bottom-0 left-0 z-30 mx-auto block max-w-[1480px] translate-y-1/2 transform px-5 md:px-7.5 lg:px-10 2xl:px-15'>
        <div className='relative bg-gray-100 shadow-xs'>
          <Formik
            initialValues={{
              formDates: {
                from: new Date(),
                to: new Date(new Date().setDate(new Date().getDate() + 1)),
              },
              adults: 1,
              children: 0,
            }}
            // validationSchema={validationSchema}

            onSubmit={(values) => {
              handleRedirect(values);
            }}
            validateOnMount={true}
          >
            {({ values, setFieldValue }) => (
              <Form className='grid grid-cols-1 lg:min-h-[150px] lg:grid-cols-3'>
                <div className='relative flex flex-col px-5 py-3 lg:justify-center lg:p-5 after:lg:absolute after:lg:top-1/2 after:lg:right-0 after:lg:h-[80%] after:lg:-translate-y-1/2 after:lg:border-r-2 after:lg:border-gray-700 after:lg:content-[""]'>
                  <BookingSelectorGroup
                    label='Dates'
                    openPanel={openPanel}
                    setOpenPanel={setOpenPanel}
                    value={formatRange(values.formDates)}
                    panel='dates'
                  />
                </div>

                <div className='lg:relative lg:flex lg:justify-center lg:p-5 after:lg:absolute after:lg:top-1/2 after:lg:right-0 after:lg:h-[80%] after:lg:-translate-y-1/2 after:lg:border-r-2 after:lg:border-gray-700 after:lg:content-[""]'>
                  <div className='hidden lg:flex lg:flex-col lg:justify-center'>
                    <BookingSelectorGroup
                      label='Rooms & Guests'
                      openPanel={openPanel}
                      setOpenPanel={setOpenPanel}
                      value={`${values.adults} Adult, ${values.children} Children`}
                      panel='guests'
                    />
                  </div>

                  {openPanel === 'guests' && (
                    <PanelContainer
                      onClose={() => {
                        setOpenPanel(null);
                      }}
                      onPrevious={() => setOpenPanel('dates')}
                      onFinish={() => {
                        handleRedirect(values);
                      }}
                    >
                      <div className='mb-20 grid gap-y-6 pt-1'>
                        <GuestCounter
                          label='Adults'
                          name='adults'
                          value={values.adults}
                          onChange={(name, value) =>
                            setFieldValue(`${name}`, value)
                          }
                          min={1}
                          max={19}
                        />
                        <GuestCounter
                          label='Children'
                          name='children'
                          value={values.children}
                          onChange={(name, value) =>
                            setFieldValue(`${name}`, value)
                          }
                          min={0}
                          max={18}
                        />
                      </div>
                    </PanelContainer>
                  )}
                </div>

                <div className='hidden items-center justify-center p-5 lg:flex'>
                  <button
                    type='submit'
                    className='w-60 cursor-pointer rounded-[30px] bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-50 md:text-base lg:min-h-11 lg:text-nowrap 2xl:min-h-12.5 2xl:text-lg'
                  >
                    {data?.buttonCheckAvailabilityText}
                  </button>
                </div>

                {openPanel === 'dates' && (
                  <PanelContainer
                    onClose={() => {
                      setOpenPanel(null);
                    }}
                    step={1}
                    onNext={() => {
                      setOpenPanel('guests');
                    }}
                  >
                    <DatePicker
                      name='formDates'
                      mode='range'
                      isOpen={openPanel === 'dates'}
                      onClose={() => setOpenPanel(null)}
                      footer
                      numberOfMonths={isMobile ? 1 : 2}
                    />
                  </PanelContainer>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {openPanel && (
        <div className='fixed inset-0 z-20 bg-[rgba(83,83,83,0.5)] backdrop-blur-[1px]' />
      )}
    </>
  );
};

export default BookingWidget;
