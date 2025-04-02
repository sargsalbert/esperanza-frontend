'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import LanguageSelector from './LanguageSelector';

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
        className={`fixed top-0 left-0 z-30 flex h-full w-[673px] transform flex-col justify-between bg-gray-100 shadow-xs transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='px-12.5 py-10'>
          <div className='mb-16 flex items-center'>
            <button
              onClick={onClose}
              className='mr-11 cursor-pointer p-2'
              aria-label='Close menu'
            >
              <svg
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='2.12305'
                  y='0.83252'
                  width='30'
                  height='3'
                  rx='1.5'
                  transform='rotate(45 2.12305 0.83252)'
                  fill='#362E25'
                />
                <rect
                  y='22.0457'
                  width='30'
                  height='3'
                  rx='1.5'
                  transform='rotate(-45 0 22.0457)'
                  fill='#362E25'
                />
              </svg>
            </button>
            <LanguageSelector />
          </div>

          <nav>
            <ul className='space-y-5.5 pl-4.5'>
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`inline-block py-1 text-2xl text-gray-700 ${isActive(href) ? 'font-medium text-gray-900' : ''}`}
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='h-35 bg-gray-200' />
      </div>
    </>
  );
}
