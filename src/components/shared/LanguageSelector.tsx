'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface LanguageSelectorProps {
  initialLanguage?: 'EN' | 'Lao';
  onLanguageChange?: (language: 'EN' | 'Lao') => void;
}

const LanguageSelector = ({
  initialLanguage = 'EN',
}: LanguageSelectorProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeLanguage, setActiveLanguage] = useState<'EN' | 'Lao'>(
    initialLanguage,
  );

  const handleLanguageChange = (language: 'EN' | 'Lao') => {
    setActiveLanguage(language);

    const locale = language.toLowerCase(); // 'en' or 'lt'
    const segments = pathname.split('/');
    segments[1] = locale; // replace the locale segment
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <ul className='flex items-center'>
      <li
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('EN');
        }}
        className={`inline-flex cursor-pointer items-center text-sm font-semibold transition-colors md:text-base 2xl:text-lg ${
          activeLanguage === 'EN' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        <span>EN</span>
        <span className='mr-[14px] ml-[12px] inline-flex h-3.5 w-0.5 bg-yellow-500' />
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('Lao');
        }}
        className={`inline-flex cursor-pointer items-center text-sm font-semibold transition-colors md:text-base 2xl:text-lg ${
          activeLanguage === 'Lao' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        <span>LT</span>
      </li>
    </ul>
  );
};

export default LanguageSelector;
