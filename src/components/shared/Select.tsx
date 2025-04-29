'use client';

import { useEffect, useState } from 'react';
import { SelectArrowIcon } from '../icons/selectArrowIcon';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CustomChangeEvent {
  target: {
    name: string;
    value: string;
    type: string;
  };
  preventDefault: () => void;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  name: string;
  onChange?: (e: CustomChangeEvent) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
}

const Select = ({
  options = [],
  placeholder = 'Select an option',
  name = '',
  value = '',
  onChange = () => {},
  required = false,
  disabled = false,
  className = '',
  error = false,
  errorMessage = '',
  fullWidth = true,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  // Update internal state when external value changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    setIsOpen(false);

    // Create a synthetic event object similar to native inputs
    const syntheticEvent: CustomChangeEvent = {
      target: {
        name,
        value: option.value,
        type: 'select',
      },
      preventDefault: () => {},
    };

    onChange(syntheticEvent);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        !document.getElementById(`taiwan-select-${name}`)?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, name]);

  // Find the selected option's label
  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );
  const displayText = selectedOption?.label || selectedValue || placeholder;

  return (
    <div
      id={`taiwan-select-${name}`}
      className={`relative mb-5 sm:mb-7.5 lg:mb-10 ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {/* Select Input */}
      <div
        className={`min-h-10 w-full border-b-2 ${error ? 'border-red-500' : 'border-gray-200'} flex cursor-pointer items-center justify-between py-2.5 text-sm font-medium transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
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
        aria-controls={`dropdown-${name}`}
      >
        <span className={selectedValue ? 'text-gray-900' : 'text-gray-300'}>
          {displayText}
        </span>

        {/* Custom Arrow Icon */}
        {isOpen ? (
          <SelectArrowIcon className='h-[6px] w-[12px] flex-shrink-0 origin-center rotate-180 text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px]' />
        ) : (
          <SelectArrowIcon className='h-[6px] w-[12px] flex-shrink-0 text-gray-300 transition-transform duration-300 sm:h-[7px] sm:w-[14px]' />
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          id={`dropdown-${name}`}
          className='absolute z-10 max-h-60 w-full overflow-auto rounded-md border border-gray-100 bg-white shadow-xl transition-all duration-300 ease-in-out'
          role='listbox'
        >
          <div className='py-1'>
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center px-4 py-3 text-sm transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900 sm:text-base ${selectedValue === option.value ? 'bg-gray-50 font-medium text-gray-900' : 'text-gray-700'} ${option.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => !option.disabled && handleSelect(option)}
                role='option'
                aria-selected={selectedValue === option.value}
                aria-disabled={option.disabled}
                tabIndex={option.disabled ? -1 : 0}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (
                    (e.key === 'Enter' || e.key === ' ') &&
                    !option.disabled
                  ) {
                    handleSelect(option);
                    e.preventDefault();
                  }
                }}
              >
                {/* {selectedValue === option.value && (
                  <span className='mr-2 text-blue-500'>•</span>
                )} */}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error message */}
      {error && errorMessage && (
        <p className='mt-1 text-xs text-red-500'>{errorMessage}</p>
      )}

      {/* Hidden input for form submission */}
      <input
        type='hidden'
        name={name}
        value={selectedValue || ''}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Select;
