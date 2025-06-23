'use client';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { EmaiIcon } from '../icons/emaiIcon';
import { MapIcon } from '../icons/mapIcon';
import { PhoneIcon } from '../icons/phoneIcon';
import { MenuArrowIcon } from '../icons/menuArrowIcon';
import { GlobalQuery } from '@/gql/graphql';
import LocaleLink from './LocaleLink';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
  menuData: GlobalQuery['global'];
}

const menuItems = [
  { href: '/destination', label: 'Destination' },
  { href: '/rooms-suites', label: 'Rooms & Suites' },
  { href: '/villas', label: 'Villas' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/dining', label: 'Dining' },
  { href: '/meetings-events', label: 'Meetings & Events' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/gift-cards', label: 'Gift Cards' },
];

export function SideMenu({
  isOpen,
  onClose,
  isScrolled,
  menuData,
}: SideMenuProps) {
  const localizedMenuItems = useMemo(() => {
    return menuItems.map((item, index) => ({
      ...item,
      label: menuData?.menuLinks?.[index]?.label || item.label,
    }));
  }, [menuData]);

  const pathname = usePathname();
  const stripLocale = (path: string) => path.replace(/^\/[a-z-]+(\/|$)/i, '/');

  const normalize = (p: string) => p.replace(/\/$/, '');

  const isActive = useCallback(
    (path: string) => normalize(stripLocale(pathname)) === normalize(path),
    [pathname],
  );

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-[rgba(83,83,83,0.5)] backdrop-blur-[1px]'
          onClick={onClose}
        />
      )}

      <div
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.4s ease-in-out',
          willChange: 'transform',
        }}
        className={`fixed top-auto bottom-0 ${isScrolled ? 'h-[calc(100%_-_64px)] md:h-[calc(100%_-_90px)] 2xl:h-[calc(100%_-_98px)]' : 'h-[calc(100%_-_84px)] md:h-[calc(100%_-110px)] 2xl:h-[calc(100%_-_123px)]'} left-0 z-100 flex w-full flex-col justify-between overflow-y-auto bg-gray-100 lg:w-[673px]`}
      >
        <div className='px-5 py-6 md:px-7.5 md:py-7.5 lg:px-10 2xl:px-15'>
          <nav>
            <ul className='space-y-[4%]'>
              {localizedMenuItems.map(({ href, label }) => {
                const isHovered = hoveredItem === href;
                const isAnyHovering = hoveredItem !== null;

                // Set class logic
                const linkClass = isHovered
                  ? 'text-gray-900 font-medium'
                  : isAnyHovering
                    ? 'text-gray-600'
                    : isActive(href)
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-700';

                const iconColor = isHovered
                  ? 'text-gray-900'
                  : isAnyHovering
                    ? 'text-gray-600'
                    : isActive(href)
                      ? 'text-gray-900'
                      : 'text-gray-700';

                return (
                  <li key={href}>
                    <LocaleLink
                      href={href}
                      onClick={onClose}
                      onMouseEnter={() => setHoveredItem(href)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`inline-flex py-1 text-base transition-colors duration-300 sm:text-lg lg:text-xl 2xl:text-2xl ${linkClass}`}
                    >
                      <span>{label}</span>
                      <span
                        className={`ml-5.5 self-center md:ml-7.5 lg:ml-10 2xl:ml-15 ${isActive(href) ? 'inline-flex' : 'hidden'}`}
                      >
                        <MenuArrowIcon
                          className={`h-2 w-1 transition-colors duration-300 sm:h-2.5 sm:w-1.5 md:h-3.5 md:w-[7px] ${iconColor}`}
                        />
                      </span>
                    </LocaleLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className='mt-auto mb-[9%] flex px-5 md:px-7.5 lg:hidden lg:px-10 2xl:px-15'>
          <LocaleLink
            href={menuData?.bookButton?.buttonUrl || ''}
            target={menuData?.bookButton?.newTab ? '_blank' : undefined}
            className='flex min-h-9 w-full cursor-pointer items-center justify-center rounded-[20px] bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-50'
          >
            {menuData?.bookButton?.buttonText}
          </LocaleLink>
        </div>

        <div className='bg-gray-200 px-5 pt-7.5 pb-4 md:px-7.5 lg:px-10 2xl:px-15'>
          <div className='mb-[3%] flex items-center space-x-5 md:space-x-6.5'>
            <a href={`tel:${menuData?.menuFooterPhone}`}>
              <PhoneIcon />
            </a>

            <div className='h-5 w-px bg-[#9A9A9A]'></div>
            <a href={`mailto:${menuData?.menuFooterEmail}`}>
              <EmaiIcon />
            </a>
            <div className='h-5 w-px bg-[#9A9A9A]'></div>
            <a
              href={menuData?.menuFooterLocation || '#'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MapIcon />
            </a>
          </div>
          {menuData?.menuFooterSmallText && (
            <p className='mt-[6%] text-center text-xs text-gray-700 md:text-sm'>
              {menuData.menuFooterSmallText}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
