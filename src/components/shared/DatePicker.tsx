import React, { useRef, useState, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

type Props = {
  name: string;
  placeholder?: string;
};

export const DatePicker: React.FC<Props> = ({ name, placeholder }) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedDates: Date[] = field.value || [];

  const handleSelect = (dates: Date[] | undefined) => {
    setFieldValue(name, dates || []);
    setFieldTouched(name, true);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const showError = meta.touched && meta.error;

  return (
    <div className='relative mb-5 sm:mb-7.5 lg:mb-10' ref={ref}>
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
          setFieldTouched(name, true);
        }}
        className={`placeholder-font-medium min-h-10 w-full cursor-pointer border-b-2 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none sm:text-base lg:min-h-12.5 lg:border-b-3 ${
          showError
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-200 focus:border-gray-300'
        }`}
      />

      {open && (
        <div className='absolute z-10 mt-2 rounded-md border border-gray-200 bg-white shadow-md'>
          <DayPicker
            mode='multiple'
            selected={selectedDates}
            onSelect={handleSelect}
            className='p-3'
            animate
          />
        </div>
      )}

      {showError && (
        <div className='mt-1 text-sm text-red-500'>{meta.error}</div>
      )}
    </div>
  );
};
