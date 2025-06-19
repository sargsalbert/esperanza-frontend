// LanguageSelector.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

const LANGUAGES: Record<string, string> = {
  en: 'EN',
  lt: 'LT',
};

const LanguageSelector: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex items-center">
      {Object.entries(LANGUAGES).map(([locale, label], index, arr) => (
        <div key={locale} className="flex items-center">
          <div
            onClick={() => handleLanguageChange(locale)}
            className={`min-w-[24px] cursor-pointer text-center text-sm font-semibold transition-colors md:text-base 2xl:text-lg ${
              currentLocale === locale ? 'text-gray-800' : 'text-gray-600'
            }`}
          >
            {label}
          </div>
          {index < arr.length - 1 && (
            <span className="mx-[10px] inline-block h-3.5 w-0.5 bg-yellow-500" />
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
