import React, { useRef, useCallback, ReactNode } from 'react';
import { useField, useFormikContext } from 'formik';
import { DateRange, DayPicker, getDefaultClassNames, Locale } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { NoAvailabilityIcon } from '../icons/noAvailabilityIcon';
import { enUS, lt } from "react-day-picker/locale";
import { Locale as AppLocale } from '../../../i18n-config';

export const localeMap: Record<AppLocale, Locale> = {
  en: enUS,
  lt: lt,
};

type Props = {
  name: string;
  placeholder?: string;
  mode?: 'single' | 'multiple' | 'range';
  formatDate?: (date: Date) => string;
  isOpen?: boolean;
  onClose?: () => void;
  footer?: boolean;
  numberOfMonths?: number;
  withLabel?: boolean;
  textSelectedDates?: string | null;
  textNoAvailability?: string | null;
  currentLanguage: AppLocale;
};

export const formatRange = (range: DateRange, locale?: AppLocale): React.ReactNode => {

  if (!range.from) return '';
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  };
  const fromStr = range.from.toLocaleDateString(locale, options);
  const toStr = range.to ? range.to.toLocaleDateString(locale, options) : '';
  return toStr ? (
    <span className='flex items-center gap-2.5'>
      {fromStr}
      <svg
        width='12'
        height='8'
        viewBox='0 0 12 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.3585 4.35331C11.5538 4.15805 11.5538 3.84147 11.3585 3.6462L8.17654 0.464222C7.98128 0.26896 7.66469 0.26896 7.46943 0.464222C7.27417 0.659484 7.27417 0.976067 7.46943 1.17133L10.2979 3.99976L7.46943 6.82818C7.27417 7.02345 7.27417 7.34003 7.46943 7.53529C7.66469 7.73055 7.98128 7.73055 8.17654 7.53529L11.3585 4.35331ZM-8.32835e-08 4.49976L11.005 4.49976L11.005 3.49976L8.32835e-08 3.49976L-8.32835e-08 4.49976Z'
          fill='black'
        />
      </svg>
      {toStr}
    </span>
  ) : (
    fromStr
  );
};

export const DatePicker: React.FC<Props> = ({
  name,
  mode = 'single',
  formatDate = (date) => date.toLocaleDateString(),
  isOpen,
  footer,
  numberOfMonths,
  textSelectedDates,
  textNoAvailability,
  currentLanguage
}) => {
  const defaultClassNames = getDefaultClassNames();
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const ref = useRef<HTMLDivElement>(null);

  const selectedDates = field.value;

  const calendarLocale = localeMap[currentLanguage];

  const handleSelect = useCallback(
    (dates: unknown) => {
      const selected =
        dates ||
        (mode === 'multiple'
          ? []
          : mode === 'range'
            ? { from: undefined, to: undefined }
            : undefined);
      setFieldValue(name, selected, true);
      setFieldTouched(name, true, true);
    },
    [name, setFieldValue, setFieldTouched, mode],
  );

  let formattedDate: string | ReactNode = '';
  if (mode === 'multiple' && Array.isArray(selectedDates)) {
    formattedDate = selectedDates.map(formatDate).join(', ');
  } else if (mode === 'range' && selectedDates && selectedDates.from) {
    formattedDate = formatRange(selectedDates,);
  } else if (mode === 'single' && selectedDates instanceof Date) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formattedDate = formatDate(selectedDates);
  }

  const showError = meta.touched && meta.error;

  return (
    <div ref={ref} className='relative'>
      {isOpen && (
        <div>
          <DayPicker
            mode={mode}
            navLayout='around'
            ISOWeek
            selected={selectedDates}
            onSelect={handleSelect}
            locale={calendarLocale}
            numberOfMonths={numberOfMonths || 1}
            disabled={{ before: new Date() }}
            footer={
              footer && (
                <div className='mt-6 flex'>
                  {!!textSelectedDates && (
                    <div className='mr-6 flex items-center lg:mr-10'>
                      <span className='mr-2.5 inline-block h-[12px] w-[12px] bg-gray-800' />
                      <span className='text-sm font-normal'>
                        {textSelectedDates}
                      </span>
                    </div>
                  )}
                  {!!textNoAvailability && (
                    <div className='flex items-center'>
                      <NoAvailabilityIcon className='mr-2.5 h-[12px] w-[12px] text-gray-800' />
                      <span className='text-sm font-normal'>
                        {textNoAvailability}
                      </span>
                    </div>
                  )}
                </div>
              )
            }
            {...(mode === 'range' ? { required: true } : {})}
            classNames={{
              // root: `${defaultClassNames.root} bg-gray-100 p-2`,
              today: `${defaultClassNames.root} border-gray-800 outline-1`,
              selected: `${defaultClassNames.root} bg-gray-800 text-white`,
              chevron: `${defaultClassNames.chevron} !fill-[#A5A5A5]`,

              button_previous: `${defaultClassNames.button_previous} !w-[20px] z-10`,
              button_next: `${defaultClassNames.button_next} !w-[20px]`,

              caption_label: `${defaultClassNames.caption_label} font-semibold text-[13px] sm:text-base`,
              disabled: `${defaultClassNames.disabled} bg-[#DFDDDD]`,
              day: `${defaultClassNames.day} text-[13px] sm:text-base`,
              month_caption: `${defaultClassNames.month_caption} mb-2`,
              range_start: `bg-gray-800 `,
              range_end: `bg-gray-800`,
              range_middle: `bg-gray-800`,

              months: `${defaultClassNames.months} min-w-full !flex-nowrap lg:!gap-[5%] xl:!gap-[8%]`,
              month: `${defaultClassNames.month} ${numberOfMonths === 2 ? 'w-[50%]' : 'w-full'}`,
              month_grid: `${defaultClassNames.month_grid} w-full`,
              day_button: `${defaultClassNames.day_button} !w-full`,
            }}
          />
        </div>
      )}

      {showError && (
        <div className='mt-1 text-sm text-red-500'>{meta.error}</div>
      )}
    </div>
  );
};
