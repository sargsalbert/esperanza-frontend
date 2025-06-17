'use client';

import { useEffect, useRef, useState } from 'react';
import { SelectArrowIcon } from '../icons/selectArrowIcon';
import { useField } from 'formik';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options?: Option[];
  placeholder?: string | null;
  name: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const Select = ({
  options = [],
  placeholder = 'Select an option',
  name,
  required = false,
  disabled = false,
  className = '',
  fullWidth = true,
}: SelectProps) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === field.value);
  const displayText = selectedOption?.label || placeholder;

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    if (!option.disabled) {
      helpers.setValue(option.value);
      setIsOpen(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative mb-5 sm:mb-7.5 lg:mb-10 ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {/* Trigger */}
      <div
        className={`min-h-10 w-full border-b-2 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-200'} flex cursor-pointer items-center justify-between py-2.5 text-sm font-medium transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={toggleDropdown}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleDropdown();
            e.preventDefault();
          }
        }}
        role='combobox'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <span className={field.value ? 'text-gray-900' : 'text-gray-300'}>
          {displayText}
        </span>
        <SelectArrowIcon
          className={`h-[6px] w-[12px] flex-shrink-0 text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px] ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className='absolute z-10 max-h-60 w-full overflow-auto rounded-md border border-gray-100 bg-white shadow-xl transition-all duration-300 ease-in-out'>
          <div className='py-1'>
            {options.map((option, idx) => (
              <div
                key={idx}
                className={`flex cursor-pointer items-center px-4 py-3 text-sm transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900 sm:text-base ${field.value === option.value ? 'bg-gray-50 font-medium text-gray-900' : 'text-gray-700'} ${option.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => handleSelect(option)}
                role='option'
                aria-selected={field.value === option.value}
                aria-disabled={option.disabled}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {meta.touched && meta.error && (
        <p className='mt-1 text-xs text-red-500'>{meta.error}</p>
      )}

      {/* Hidden input to satisfy native form requirements */}
      <input
        type='hidden'
        name={field.name}
        value={field.value || ''}
        required={required}
        disabled={disabled}
        onChange={field.onChange}
      />
    </div>
  );
};

export default Select;
