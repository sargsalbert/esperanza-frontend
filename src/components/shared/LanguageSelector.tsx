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
    <div className='flex items-center'>
      <div
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('EN');
        }}
        className={`inline-block min-w-[24px] cursor-pointer items-center text-center text-sm font-semibold transition-colors md:text-base 2xl:text-lg ${
          activeLanguage === 'EN' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        EN
      </div>
      {/* Centered divider between the two language options */}
      <span className='mx-[10px] inline-block h-3.5 w-0.5 bg-yellow-500' />
      <div
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('Lao');
        }}
        className={`inline-block min-w-[24px] cursor-pointer items-center text-center text-sm font-semibold transition-colors md:text-base 2xl:text-lg ${
          activeLanguage === 'Lao' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        LT
      </div>
    </div>
  );
};

export default LanguageSelector;
