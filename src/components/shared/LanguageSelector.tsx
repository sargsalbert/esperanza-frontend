'use client';

import { useState } from 'react';

interface LanguageSelectorProps {
  initialLanguage?: 'EN' | 'LT';
  onLanguageChange?: (language: 'EN' | 'LT') => void;
}

const LanguageSelector = ({
  initialLanguage = 'EN',
  onLanguageChange,
}: LanguageSelectorProps) => {
  const [activeLanguage, setActiveLanguage] = useState<'EN' | 'LT'>(
    initialLanguage,
  );

  const handleLanguageChange = (language: 'EN' | 'LT') => {
    setActiveLanguage(language);
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  return (
    <ul className='flex items-center'>
      <li
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('EN');
        }}
        className={`inline-flex cursor-pointer items-center text-sm font-semibold transition-colors sm:text-base md:text-lg ${
          activeLanguage === 'EN' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        <span>EN</span>
        <span className='mr-[14px] ml-[12px] inline-flex h-3.5 w-0.5 bg-yellow-500' />
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('LT');
        }}
        className={`inline-flex cursor-pointer items-center text-sm font-semibold transition-colors sm:text-base md:text-lg ${
          activeLanguage === 'LT' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        <span>LT</span>
      </li>
    </ul>
  );
};

export default LanguageSelector;
