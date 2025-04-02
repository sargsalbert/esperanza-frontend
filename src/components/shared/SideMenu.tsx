'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Backdrop - only visible when menu is open */}
      {isOpen && (
        <div className='fixed inset-0 z-20 bg-black/30' onClick={onClose} />
      )}

      {/* Side Menu */}
      <div
        className={`bg-background fixed top-0 left-0 z-30 h-full w-[400px] transform shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-6'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Menu</h2>
            <button
              onClick={onClose}
              className='rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              X<span className='sr-only'>Close menu</span>
            </button>
          </div>

          <nav>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='/#'
                  className={`hover:text-primary block py-2 ${isActive('/') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  Resort overview
                </Link>
              </li>
              <li>
                <Link
                  href='/rooms'
                  className={`hover:text-primary block py-2 ${isActive('/about') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className={`hover:text-primary block py-2 ${isActive('/services') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  Villas
                </Link>
              </li>
              <li>
                <Link
                  href='/products'
                  className={`hover:text-primary block py-2 ${isActive('/products') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  SPA
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={`hover:text-primary block py-2 ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={`hover:text-primary block py-2 ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={`hover:text-primary block py-2 ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  experience
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={`hover:text-primary block py-2 ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
                  onClick={onClose}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
