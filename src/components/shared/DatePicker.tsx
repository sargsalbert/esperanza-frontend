import React, { useRef, useState, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { SelectArrowIcon } from '../icons/selectArrowIcon';

type Props = {
  name: string;
  placeholder?: string;
};

export const DatePicker: React.FC<Props> = ({ name, placeholder }) => {
  const defaultClassNames = getDefaultClassNames();

  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedDates: Date[] = field.value || [];

  const handleSelect = (dates: Date[] | undefined) => {
    const selected = dates || [];
    setFieldValue(name, selected, true);
    setFieldTouched(name, true, true);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);

        // Mark field as touched and trigger validation if a date is selected
        if (selectedDates.length > 0) {
          setFieldTouched(name, true, true); // 'true' triggers validation
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedDates, name, setFieldTouched]);

  const showError = meta.touched && meta.error;

  return (
    <div className='relative mb-5 sm:mb-7.5 lg:mb-10' ref={ref}>
      <div className='relative'>
        <input
          readOnly
          value={
            selectedDates.length > 0
              ? selectedDates.map((d) => d.toLocaleDateString()).join(', ')
              : ''
          }
          placeholder={placeholder || 'Select dates...'}
          onClick={() => {
            setOpen(!open);
            setFieldTouched(name, true, true);
          }}
          className={`placeholder-font-medium min-h-10 w-full cursor-pointer border-b-2 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none sm:text-base lg:min-h-12.5 lg:border-b-3 ${
            showError
              ? 'border-gray-200 focus:border-gray-300'
              : 'border-gray-200 focus:border-gray-300'
          }`}
        />
        {open ? (
          <SelectArrowIcon className='absolute top-1/2 right-2 h-[6px] w-[12px] flex-shrink-0 origin-center -translate-y-1/2 rotate-180 transform text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px]' />
        ) : (
          <SelectArrowIcon className='absolute top-1/2 right-2 h-[6px] w-[12px] flex-shrink-0 -translate-y-1/2 transform text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px]' />
        )}
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
              today: `border-gray-800 border-1`, // Add a border to today's date
              selected: `bg-gray-800 text-white`, // Highlight the selected day
              root: `${defaultClassNames.root} bg-gray-100 p-3`, // Add a shadow to the root element
              chevron: `${defaultClassNames.chevron} fill-gray-800`, // Change the color of the chevron

              caption_label: `${defaultClassNames.caption_label} font-semibold`,
              disabled: `${defaultClassNames.disabled} bg-[#DFDDDD]`,
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
