'use client';
import { SideMenu } from './SideMenu';
import { useEffect, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { LogoIcon } from '../icons/logoIcon';
import Hamburger from './Hamburger';
import LocaleLink from './LocaleLink';
import { GlobalQuery } from '@/gql/graphql';

type HeaderProps = {
  global: GlobalQuery['global'];
};

const Header = ({ global }: HeaderProps) => {
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
          className={`mx-auto flex items-center justify-between px-5 py-2 transition-all duration-300 md:px-7.5 lg:px-10 2xl:px-15 ${isScrolled ? 'h-[64px] md:h-[90px] 2xl:h-[98px]' : 'h-[84px] md:h-[110px] 2xl:h-[123px]'} `}
        >
          <div
            className={`flex items-center ${
              isMenuOpen
                ? 'w-full justify-between lg:w-auto lg:justify-start'
                : ''
            }`}
          >
            <button
              onClick={toggleMenu}
              className={`relative z-50 mr-5 flex h-[36px] w-[22px] cursor-pointer flex-col justify-center md:mr-7.5 lg:w-[30px] 2xl:mr-10 2xl:w-[36px]`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Hamburger isOpen={isMenuOpen} />
            </button>
            <div
              className={`${
                isMenuOpen ? 'inline-block' : 'hidden lg:inline-block'
              }`}
            >
              <LanguageSelector />
            </div>
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transform ${
              isMenuOpen ? 'hidden lg:inline-block' : ''
            }`}
          >
            <LocaleLink href='/'>
              <LogoIcon
                className={`transition-all duration-300 ${isScrolled ? 'h-[41px] w-[104px] md:h-[63px] md:w-[159px] 2xl:h-[63px] 2xl:w-[159px]' : 'h-[52px] w-[131px] md:h-[71px] md:w-[179px] 2xl:h-[79px] 2xl:w-[199px]'} `}
              />
            </LocaleLink>
          </div>
          <div className='hidden items-center lg:flex'>
            <LocaleLink
              href={global?.bookButton?.buttonUrl || ''}
              target={!!global?.bookButton?.newTab}
              className='flex min-h-9 cursor-pointer items-center justify-center rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 md:min-h-10.5 md:min-w-38 md:text-base 2xl:min-h-11 2xl:min-w-48 2xl:text-lg'
            >
              {global?.bookButton?.buttonText}
            </LocaleLink>
          </div>
        </div>
      </header>
      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isScrolled={isScrolled}
        menuData={global}
      />
    </>
  );
};

export default Header;
