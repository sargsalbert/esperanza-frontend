'use client';

import { usePathname, useRouter } from 'next/navigation';

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1];
  const activeLanguage = currentLocale === 'lao' ? 'Lao' : 'EN';

  const handleLanguageChange = (language: 'EN' | 'Lao') => {
    const locale = language === 'EN' ? 'en' : 'lao';
    const segments = pathname.split('/');
    segments[1] = locale; // replace locale segment
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
