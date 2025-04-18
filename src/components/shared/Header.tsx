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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 right-0 left-0 z-90 w-full bg-gray-100 ${isMenuOpen ? '' : 'shadow-xs'}`}
      >
        <div
          className={`mx-auto flex items-center justify-between px-5 py-2 transition-all duration-300 md:px-10 2xl:px-15 ${isScrolled ? 'h-[84px] md:h-[90px] 2xl:h-[98px]' : 'h-[84px] md:h-[110px] 2xl:h-[123px]'} `}
        >
          <div
            className={`flex items-center ${
              isMenuOpen
                ? 'w-full justify-between sm:w-auto sm:justify-start'
                : ''
            }`}
          >
            <button
              onClick={toggleMenu}
              className={`relative mr-5 flex h-[40px] w-[24px] cursor-pointer flex-col justify-center gap-[5px] md:mr-7.5 md:w-[32px] md:gap-[7px] 2xl:mr-10 2xl:w-[40px] 2xl:gap-[8px]`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-[2px] bg-gray-800 transition-all duration-300 2xl:h-[3px] ${
                  isMenuOpen
                    ? 'w-[24px] translate-y-[7px] rotate-45 md:w-[32px] md:translate-y-[9px] 2xl:w-[40px] 2xl:translate-y-[11px]'
                    : 'w-[24px] md:w-[32px] 2xl:w-[40px]'
                }`}
              />
              <span
                className={`block h-[2px] bg-gray-800 transition-all duration-300 2xl:h-[3px] ${
                  isMenuOpen
                    ? 'w-0 opacity-0'
                    : 'w-[18px] md:w-[24px] 2xl:w-[30px]'
                }`}
              />
              <span
                className={`block h-[2px] bg-gray-800 transition-all duration-300 2xl:h-[3px] ${
                  isMenuOpen
                    ? 'w-[24px] -translate-y-[7px] -rotate-45 md:w-[32px] md:-translate-y-[9px] 2xl:w-[40px] 2xl:-translate-y-[11px]'
                    : 'w-[12px] md:w-[16px] 2xl:w-[20px]'
                }`}
              />
            </button>
            <div
              className={`${
                isMenuOpen ? 'inline-block' : 'hidden md:inline-block'
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
              <LogoIcon
                className={`transition-all duration-300 ${isScrolled ? 'h-[52px] w-[131px] md:h-[63px] md:w-[159px] 2xl:h-[63px] 2xl:w-[159px]' : 'h-[52px] w-[131px] md:h-[71px] md:w-[179px] 2xl:h-[79px] 2xl:w-[199px]'} `}
              />
            </Link>
          </div>
          <div className='hidden items-center md:flex'>
            <button className='min-h-9 cursor-pointer rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 md:min-h-10.5 md:min-w-38 md:text-base 2xl:min-h-11 2xl:min-w-48 2xl:text-lg'>
              Book
            </button>
          </div>
        </div>
      </header>
      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isScrolled={isScrolled}
      />
    </>
  );
};

export default Header;
