'use client';
import { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';

interface TextAreaProps {
  name: string;
  placeholder?: string;
  maxLength?: number;
}

const TextArea = ({
  name,
  placeholder = '',
  maxLength = 250,
}: TextAreaProps) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue, setTouched } = helpers;

  const [charCount, setCharCount] = useState(value?.length || 0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize on value change
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight + 5}px`;
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= maxLength) {
      setValue(newValue);
      setCharCount(newValue.length);
    }
  };

  const showError = meta.touched && meta.error;

  return (
    <div className='relative mb-7'>
      <textarea
        {...field}
        id={name}
        ref={textareaRef}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={1}
        className={`min-h-10 w-full resize-none border-b-2 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none sm:text-base lg:min-h-12.5 lg:border-b-3 ${
          showError
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-200 focus:border-gray-300'
        }`}
      />
      <div
        className={`absolute right-0 -bottom-3.5 flex items-center text-xs ${
          charCount >= maxLength ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        <span>{charCount}</span>
        <span className='mx-1'>/</span>
        <span>{maxLength}</span>
      </div>
      {showError && (
        <div className='mt-1 text-sm text-red-600'>{meta.error}</div>
      )}
    </div>
  );
};

export default TextArea;
