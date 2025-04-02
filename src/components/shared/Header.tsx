'use client';
import Image from 'next/image';
import { SideMenu } from './SideMenu';
import { useState } from 'react';
import { MenuIcon } from '../icons/menuIcon';
import LanguageSelector from './LanguageSelector';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='z-9 w-full bg-gray-100 shadow-xs'>
        <div className='mx-auto flex h-[123] items-center justify-between px-[60px] py-[22px]'>
          <div className='flex items-center'>
            <button
              onClick={toggleMenu}
              className='mr-10 cursor-pointer text-gray-800'
            >
              <MenuIcon />
              <span className='sr-only'>Toggle menu</span>
            </button>
            <LanguageSelector />
          </div>

          <div className='absolute left-1/2 -translate-x-1/2 transform'>
            <Link href='/'>
              <Image
                width={199}
                height={79}
                src={Logo}
                alt='Logo'
                className='object-contain'
              />
            </Link>
          </div>
          <div className='flex items-center'>
            <button className='min-h-11 min-w-48 cursor-pointer rounded-4xl bg-gray-800 px-4 py-1.5 text-lg font-medium text-gray-50'>
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
