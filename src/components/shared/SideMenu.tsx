'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import LanguageSelector from './LanguageSelector';
import { CloseIcon } from '../icons/closeIcon';
import { EmaiIcon } from '../icons/emaiIcon';
import { MapIcon } from '../icons/mapIcon';
import { PhoneIcon } from '../icons/phoneIcon';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '/resort-overview', label: 'Resort Overview' },
  { href: '/rooms', label: 'Rooms & Suites' },
  { href: '/about', label: 'Villas' },
  { href: '/products', label: 'SPA' },
  { href: '/contact', label: 'Dining' },
  { href: '/events', label: 'Events' },
  { href: '/experience', label: 'Experience' },
  { href: '/gallery', label: 'Gallery' },
];

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const pathname = usePathname();

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-20 bg-black/30' onClick={onClose} />
      )}

      <div
        className={`fixed top-0 bottom-0 left-0 z-100 flex h-full w-full transform flex-col justify-between overflow-y-auto bg-gray-100 shadow-xs transition-transform duration-400 ease-in-out sm:w-[430px] md:w-[538px] lg:w-[673px] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='px-6 py-6 sm:px-7.5 sm:py-9 md:px-10 md:py-10 lg:px-15'>
          <div className='mb-12 flex items-center justify-between sm:justify-start md:mb-16'>
            <button
              onClick={onClose}
              className='mr-11 cursor-pointer'
              aria-label='Close menu'
            >
              <CloseIcon className='h-[14px] w-[14px] sm:h-[18px] sm:w-[18px] md:h-[24px] md:w-[24px]' />
            </button>
            <LanguageSelector />
          </div>

          <nav>
            <ul className='space-y-4.5 sm:space-y-6 sm:pl-2.5 md:pl-3'>
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`inline-block py-1 text-base text-gray-700 sm:text-lg md:text-xl lg:text-2xl ${isActive(href) ? 'font-medium text-gray-900' : ''}`}
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='mx-6 mt-auto mb-12.5 flex sm:hidden'>
          <button className='min-h-9 w-full cursor-pointer rounded-[20px] bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-50'>
            Book
          </button>
        </div>

        <div className='bg-gray-200 px-6 pt-7.5 pb-4 sm:px-7.5 md:px-10 lg:px-15'>
          <div className='mb-7.5 flex items-center space-x-5 sm:mb-12.5 sm:space-x-6.5'>
            <PhoneIcon />
            <div className='h-5 w-px bg-[#9A9A9A]'></div>
            <EmaiIcon />
            <div className='h-5 w-px bg-[#9A9A9A]'></div>
            <MapIcon />
          </div>
          <p className='text-center text-xs text-gray-700 sm:text-sm'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}
