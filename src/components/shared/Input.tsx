import { useField } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  placeholder?: string | null;
  type?: string;
  className?: string;
  onlyClassName?: boolean;
  inputType?: 'text' | 'number' | 'phone';
  ariaLabel?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder = '',
  type = 'text',
  className = '',
  onlyClassName = false,
  inputType = 'text',
  ariaLabel,
}) => {
  const [field, meta, helpers] = useField(name);

  const defaultClass =
    'placeholder-font-medium min-h-10 w-full border-b-2 border-gray-200 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3';

  const combinedClassName = onlyClassName
    ? className
    : `${defaultClass} ${className}`.trim();

  const inputMode: React.InputHTMLAttributes<HTMLInputElement>['inputMode'] =
    inputType === 'number' ? 'numeric' : inputType === 'phone' ? 'tel' : 'text';

  const pattern =
    inputType === 'number'
      ? '\\d*'
      : inputType === 'phone'
        ? '[0-9\\(\\)\\+\\- ]*'
        : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (inputType === 'number') {
      value = value.replace(/[^0-9]/g, '');
    } else if (inputType === 'phone') {
      value = value.replace(/[^0-9()+\-\s]/g, '');
    }

    helpers.setValue(value);
  };

  const errorId = `${name}-error`;
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div className={onlyClassName ? 'w-full' : 'mb-5 sm:mb-7.5 lg:mb-10'}>
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder || ''}
        className={combinedClassName}
        inputMode={inputMode}
        pattern={pattern}
        onChange={handleChange}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        aria-label={ariaLabel || placeholder || name}
      />
      {hasError && (
        <p id={errorId} className='mt-1 text-sm text-red-500'>
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default Input;
