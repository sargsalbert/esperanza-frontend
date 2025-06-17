import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useField, useFormikContext } from 'formik';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { SelectArrowIcon } from '../icons/selectArrowIcon';

type Props = {
  name: string;
  placeholder?: string;
};

export const DatePickerContactUs: React.FC<Props> = ({ name, placeholder }) => {
  const defaultClassNames = getDefaultClassNames();

  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedDates: Date[] = field.value || [];

  const handleSelect = useCallback(
    (dates: Date[] | undefined) => {
      const selected = dates || [];
      setFieldValue(name, selected, true);
      setFieldTouched(name, true, true);
    },
    [name, setFieldValue, setFieldTouched],
  );

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        if (selectedDates.length > 0) {
          setFieldTouched(name, true, true);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedDates.length, name, setFieldTouched]);

  const formattedDate =
    selectedDates.length > 0
      ? selectedDates.map((d) => d.toLocaleDateString()).join(', ')
      : '';

  const showError = meta.touched && meta.error;

  return (
    <div className='relative mb-5 sm:mb-7.5 lg:mb-10' ref={ref}>
      <div className='relative'>
        <input
          readOnly
          value={formattedDate}
          placeholder={placeholder || 'Select dates...'}
          onClick={() => {
            setOpen(!open);
            setFieldTouched(name, true, true);
          }}
          className={`placeholder-font-medium min-h-10 w-full cursor-pointer border-b-2 border-gray-200 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3`}
          aria-label='Date Picker'
        />
        <SelectArrowIcon
          className={`absolute top-1/2 right-2 h-[6px] w-[12px] flex-shrink-0 -translate-y-1/2 transform text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px] ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>
      {open && (
        <div className='absolute z-10 rounded-md border border-gray-200 bg-white shadow-md'>
          <DayPicker
            mode='multiple'
            navLayout='around'
            ISOWeek
            animate
            selected={selectedDates}
            onSelect={handleSelect}
            disabled={{ before: new Date() }}
            classNames={{
              root: `${defaultClassNames.root} bg-gray-100 p-2`,
              today: `${defaultClassNames.root} border-gray-800 border-1`,
              selected: `${defaultClassNames.root} bg-gray-800 text-white`,
              chevron: `${defaultClassNames.chevron} !fill-[#A5A5A5]`,
              caption_label: `${defaultClassNames.caption_label} font-semibold text-[13px] sm:text-base`,
              disabled: `${defaultClassNames.disabled} bg-[#DFDDDD]`,
              button_previous: `${defaultClassNames.button_previous} !w-[20px] z-10`,
              button_next: `${defaultClassNames.button_next} !w-[20px]`,
              day: `${defaultClassNames.day} text-[13px] sm:text-base`,
              month_caption: `${defaultClassNames.month_caption} mb-2`,
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
