'use client';
import { SideMenu } from './SideMenu';
import { useEffect, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import { LogoIcon } from '../icons/logoIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      body.classList.add('overflow-hidden');
    }

    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='sticky top-0 right-0 left-0 z-90 w-full bg-gray-100 shadow-xs'>
        <div className='mx-auto flex h-[84px] items-center justify-between px-5 py-2 sm:h-[100px] sm:px-7.5 md:h-[123px] md:px-10 lg:px-15'>
          <div
            className={`flex items-center ${
              isMenuOpen
                ? 'w-full justify-between sm:w-auto sm:justify-start'
                : ''
            }`}
          >
            <button
              onClick={toggleMenu}
              className='relative mr-5 flex h-[40px] w-[24px] cursor-pointer flex-col justify-center gap-[4.2px] sm:mr-7.5 sm:w-[40px] sm:gap-[7px] md:mr-10'
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-[2px] w-[24px] origin-center bg-gray-800 transition-all duration-400 sm:h-[3px] sm:w-[40px] ${
                  isMenuOpen
                    ? 'w-[18px] translate-y-[6px] rotate-45 sm:w-[24px] sm:translate-y-[10.5px]'
                    : ''
                }`}
              />
              <span
                className={`block h-[2px] w-[18px] origin-center bg-gray-800 transition-all duration-400 sm:h-[3px] sm:w-[30px] ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-[2px] w-[12px] origin-center bg-gray-800 transition-all duration-400 sm:h-[3px] sm:w-[20px] ${
                  isMenuOpen
                    ? 'w-[24px] translate-y-[-6px] -rotate-45 sm:w-[40px] sm:translate-y-[-9.5px]'
                    : ''
                }`}
              />
            </button>
            <div
              className={`${
                isMenuOpen ? 'inline-block' : 'hidden sm:inline-block'
              }`}
            >
              <LanguageSelector />
            </div>
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transform ${
              isMenuOpen ? 'hidden sm:inline-block' : ''
            }`}
          >
            <Link href='/'>
              <LogoIcon className='h-[52px] w-[131px] sm:h-[63px] sm:w-[159px] md:h-[79px] md:w-[199px]' />
            </Link>
          </div>
          <div className='hidden items-center sm:flex'>
            <button className='min-h-9 cursor-pointer rounded-4xl bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-50 sm:min-w-30 sm:text-base md:min-h-11 md:min-w-38 md:text-lg lg:min-w-48'>
              Book
            </button>
          </div>
        </div>
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
