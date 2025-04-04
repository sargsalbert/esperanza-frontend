'use client';
import Link from 'next/link';
import { FacebookIcon } from '../icons/facebookIcon';
import { InstagramIcon } from '../icons/instagramIcon';
import { LinkedinIcon } from '../icons/linkedinIcon';
import LanguageSelector from './LanguageSelector';
import { MemberHotelsIcon } from '../icons/memberHotelsIcon';
import { ScrollTopIcon } from '../icons/scrollTopIcon';

export function Footer() {
  return (
    <footer className=''>
      <div className='bg-gray-100'>
        <div className='w-full px-5 py-7.5 sm:py-10 md:py-12.5'>
          <div className='mb-7.5 flex justify-center text-center text-gray-800 sm:mb-12.5'>
            <MemberHotelsIcon className='h-[40px] w-[157px] sm:h-[44px] sm:w-[177px] md:h-[64px] md:w-[253px]' />
          </div>
          <div className='mb-7.5 flex justify-center gap-10'>
            <Link
              href='https://www.facebook.com/esperanzaresortspa'
              aria-label='Facebook'
              target='_blank'
            >
              <FacebookIcon className='h-[24.8px] w-[24.8px] sm:h-7 sm:w-7 md:h-7.5 md:w-7.5' />
            </Link>
            <Link href='#' aria-label='Instagram'>
              <InstagramIcon className='h-[24.8px] w-[24.8px] sm:h-7 sm:w-7 md:h-7.5 md:w-7.5' />
            </Link>
            <Link href='#' aria-label='LinkedIn'>
              <LinkedinIcon className='h-[24.8px] w-[24.8px] sm:h-7 sm:w-7 md:h-7.5 md:w-7.5' />
            </Link>
          </div>

          <div className='mb-7.5 flex justify-center'>
            <LanguageSelector />
          </div>

          <div className='mb-12.5 space-y-5 text-center text-[13px] font-medium text-gray-800 sm:space-y-7.5 sm:text-base md:text-lg'>
            <p>+370 698 78378</p>
            <p>info@esperanzaresort.lt</p>
            <p>Paunguriai, Trakai, Lithuania 21282</p>
          </div>
          <div className='relative flex items-center justify-center'>
            <div className='relative w-full max-w-[822px]'>
              <form className='flex h-11 sm:h-15'>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full rounded-full bg-gray-200 px-4.5 py-1 text-sm text-gray-800 placeholder-gray-300 placeholder:text-sm focus:outline-none sm:px-6 sm:text-base sm:placeholder:text-base'
                  required
                />
                <button
                  type='submit'
                  className='absolute right-[5px] h-9 w-28 cursor-pointer self-center rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 sm:right-[7px] sm:h-12.5 sm:w-40 sm:text-base md:w-60 md:text-lg'
                >
                  Sign up
                </button>
              </form>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='ml-4 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-800 sm:h-12.5 sm:w-12.5 xl:absolute xl:right-20'
              aria-label='Back to top'
            >
              <ScrollTopIcon className='h-4 w-4 sm:h-5 sm:w-5' />
            </button>
          </div>
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className='p-4 sm:p-5'>
          <p className='text-center text-xs font-medium text-gray-900 sm:text-base'>
            © {new Date().getFullYear()} Inc. All rights reserved.
            <span className='ml-1 inline-flex underline'>
              ESPERANZA LAKE RESORT
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
