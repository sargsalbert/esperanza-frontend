'use client';
import { useState, useEffect, useRef } from 'react';

interface TextAreaProps {
  placeholder?: string | null;
  maxLength?: number;
  initialValue?: string;
  onChange?: (value: string) => void;
}

const TextArea = ({
  placeholder,
  maxLength = 250,
  initialValue = '',
  onChange,
}: TextAreaProps) => {
  const [text, setText] = useState(initialValue);
  const [charCount, setCharCount] = useState(initialValue.length);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize functionality
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight + 5}px`;
    }
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    // Only update if within character limit or if deleting
    if (newValue.length <= maxLength) {
      setText(newValue);
      setCharCount(newValue.length);

      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <div className='relative mb-7'>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        placeholder={placeholder || ''}
        maxLength={maxLength}
        className='min-h-10 w-full resize-none border-b-2 border-gray-200 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3'
        rows={1}
      />
      <div
        className={`absolute right-0 -bottom-3.5 flex items-center text-xs ${charCount >= maxLength ? 'text-red-500' : 'text-gray-400'}`}
      >
        <span>{charCount}</span>
        <span className='mx-1'>/</span>
        <span>{maxLength}</span>
      </div>
    </div>
  );
};

export default TextArea;
