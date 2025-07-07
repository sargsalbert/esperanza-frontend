import React, { useRef, useCallback, ReactNode, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import {
  DateRange,
  DayPicker,
  getDefaultClassNames,
  Locale,
} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { NoAvailabilityIcon } from '../icons/noAvailabilityIcon';
import { enUS, lt } from 'react-day-picker/locale';
import { Locale as AppLocale } from '../../../i18n-config';
import { SelectArrowIcon } from '../icons/selectArrowIcon';
import { CloseIcon } from '../icons/closeIcon';

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
  showInput?: boolean;
  textData?: {
    resetButtonText?: string | null;
    doneButtonText?: string | null;
  };
};

export const formatRange = (
  range: DateRange,
  locale?: AppLocale,
): React.ReactNode => {
  if (!range.from) return '';
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  };
  const fromStr = range.from.toLocaleDateString(locale, options);
  const toStr = range.to ? range.to.toLocaleDateString(locale, options) : '';
  return toStr ? (
    <span className='flex items-center gap-2.5 text-nowrap lg:gap-1 xl:gap-2.5'>
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
  currentLanguage,
  showInput,
  placeholder,
  textData,
}) => {
  const defaultClassNames = getDefaultClassNames();
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const ref = useRef<HTMLDivElement>(null);

  const [hoveredDay, setHoveredDay] = useState<Date | undefined>(undefined);

  const selectedDates = field.value;

  const calendarLocale = localeMap[currentLanguage];

  const handleSelect = useCallback(
    (dates: unknown, selectedDay: Date) => {
      if (mode === 'range') {
        const currentRange = selectedDates as DateRange | undefined;

        // If no dates selected yet, or if we have a complete range, start fresh with check-in date
        if (!currentRange?.from || (currentRange.from && currentRange.to)) {
          const newRange = { from: selectedDay, to: undefined };
          setFieldValue(name, newRange, true);
          setFieldTouched(name, true, true);
          return;
        }

        // If we have a check-in date but no check-out date
        if (currentRange.from && !currentRange.to) {
          // If selected day is before check-in date, make it the new check-in date
          if (selectedDay < currentRange.from) {
            const newRange = { from: selectedDay, to: undefined };
            setFieldValue(name, newRange, true);
            setFieldTouched(name, true, true);
          } else {
            // Selected day is after check-in date, make it the check-out date
            const newRange = { from: currentRange.from, to: selectedDay };
            setFieldValue(name, newRange, true);
            setFieldTouched(name, true, true);
          }
          return;
        }
      }

      // Handle other modes (single, multiple) with original logic
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
    [name, setFieldValue, setFieldTouched, mode, selectedDates],
  );

  let formattedDate: string | ReactNode = '';
  if (mode === 'multiple' && Array.isArray(selectedDates)) {
    formattedDate = selectedDates.map(formatDate).join(', ');
  } else if (mode === 'range' && selectedDates && selectedDates.from) {
    formattedDate = formatRange(selectedDates);
  } else if (mode === 'single' && selectedDates instanceof Date) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formattedDate = formatDate(selectedDates);
  }

  const showError = meta.touched && meta.error;

  const previewRange: DateRange | undefined =
    mode === 'range' &&
    selectedDates?.from &&
    !selectedDates?.to &&
    hoveredDay instanceof Date
      ? {
          from:
            selectedDates.from < hoveredDay ? selectedDates.from : hoveredDay,
          to: selectedDates.from > hoveredDay ? selectedDates.from : hoveredDay,
        }
      : undefined;

  // input + toggle logic

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setFieldTouched(name, true, true);
  };

  const resetDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFieldValue(name, {}, false);
    setFieldTouched(name, false);
  };

  const finalIsOpen = typeof isOpen === 'boolean' ? isOpen : open;

  const inputFormattedDate =
    mode === 'multiple' && Array.isArray(selectedDates)
      ? selectedDates.map((d) => formatDate(d)).join(', ')
      : mode === 'single' && selectedDates instanceof Date
        ? formatDate(selectedDates)
        : mode === 'range' && selectedDates?.from
          ? formatRange(selectedDates, currentLanguage)
          : '';

  // End input + toggle logic

  return (
    <div ref={ref} className='relative'>
      {showInput && (
        <div className='relative mb-5 sm:mb-7.5 lg:mb-10'>
          <div
            onClick={handleToggle}
            className='min-h-10 w-full cursor-pointer border-b-2 border-gray-200 py-2.5 text-sm font-medium transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3'
          >
            {(inputFormattedDate as string) || (
              <span className='text-gray-300'>{placeholder}</span>
            )}
          </div>
          <SelectArrowIcon
            className={`absolute top-1/2 right-2 h-[6px] w-[12px] flex-shrink-0 -translate-y-1/2 transform text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px] ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>
      )}
      {finalIsOpen && (
        <div
          className={
            showInput
              ? 'absolute top-full left-0 z-30 w-full bg-gray-100 p-5 shadow-xs 2xl:w-auto'
              : ''
          }
        >
          {showInput && (
            <div className='mb-3 flex justify-end'>
              <button
                type='button'
                onClick={handleToggle}
                className='flex cursor-pointer items-center justify-center p-1 text-sm font-medium text-gray-800'
              >
                <CloseIcon className='h-3 w-3' />
              </button>
            </div>
          )}
          <DayPicker
            mode={mode}
            navLayout='around'
            ISOWeek
            selected={selectedDates}
            onSelect={handleSelect}
            locale={calendarLocale}
            numberOfMonths={numberOfMonths || 1}
            disabled={{ before: new Date() }}
            onDayMouseEnter={(day) => setHoveredDay(day)}
            onDayMouseLeave={() => setHoveredDay(undefined)}
            modifiers={{
              hoverRange: previewRange,
            }}
            modifiersClassNames={{
              hoverRange: 'bg-gray-600',
            }}
            footer={
              footer && (
                <div className={showInput ? 'mt-3.5 flex' : 'mt-6 flex'}>
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
                  {showInput && (
                    <div className='flex w-full items-center justify-between'>
                      <button
                        onClick={resetDate}
                        className='inline-flex cursor-pointer border-gray-800 py-1 text-sm font-semibold'
                      >
                        {textData?.resetButtonText || 'Reset'}
                      </button>
                      <button
                        onClick={handleToggle}
                        className='inline-flex min-w-[126px] cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 bg-transparent px-5 py-1.5 text-center text-sm font-semibold text-gray-800'
                      >
                        {textData?.doneButtonText || 'Done'}
                      </button>
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
