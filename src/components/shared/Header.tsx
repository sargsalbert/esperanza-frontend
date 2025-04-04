'use client';
import { SideMenu } from './SideMenu';
import { useEffect, useState } from 'react';
import { MenuIcon } from '../icons/menuIcon';
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
      <header className='z-9 w-full bg-gray-100 shadow-xs'>
        <div className='mx-auto flex h-[84px] items-center justify-between px-5 py-2 sm:h-[100px] sm:px-7.5 md:h-[123px] md:px-10 lg:px-15'>
          <div className='flex items-center'>
            <button
              onClick={toggleMenu}
              className='mr-5 cursor-pointer py-3 text-gray-800 sm:mr-7.5 md:mr-10'
            >
              <MenuIcon className='h-[14px] w-[25px] sm:h-[17px] sm:w-[36px] md:h-[23px] md:w-[40px]' />
              <span className='sr-only'>Toggle menu</span>
            </button>
            <div className='hidden sm:inline-block'>
              <LanguageSelector />
            </div>
          </div>

          <div className='absolute left-1/2 -translate-x-1/2 transform'>
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
