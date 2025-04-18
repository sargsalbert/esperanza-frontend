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
    <footer>
      <div className='bg-gray-100'>
        <div className='w-full px-5 py-7.5 md:py-10 2xl:py-12.5'>
          <div className='mb-7.5 flex justify-center text-center text-gray-800 md:mb-10 2xl:mb-12.5'>
            <MemberHotelsIcon className='h-[40px] w-[157px] md:h-[51px] md:w-[202px] 2xl:h-[64px] 2xl:w-[253px]' />
          </div>
          <div className='mb-7.5 flex justify-center gap-7.5 md:gap-10'>
            <Link
              href='https://www.facebook.com/esperanzaresortspa'
              aria-label='Facebook'
              target='_blank'
            >
              <FacebookIcon className='h-[24.8px] w-[24.8px] md:h-6.5 md:w-6.5 2xl:h-7.5 2xl:w-7.5' />
            </Link>
            <Link href='#' aria-label='Instagram'>
              <InstagramIcon className='h-[24.8px] w-[24.8px] md:h-6.5 md:w-6.5 2xl:h-7.5 2xl:w-7.5' />
            </Link>
            <Link href='#' aria-label='LinkedIn'>
              <LinkedinIcon className='h-[24.8px] w-[24.8px] md:h-6.5 md:w-6.5 2xl:h-7.5 2xl:w-7.5' />
            </Link>
          </div>
          <div className='mb-7.5 flex justify-center'>
            <LanguageSelector />
          </div>
          <div className='mb-7.5 space-y-5 text-center text-[13px] font-medium text-gray-800 md:mb-10 md:space-y-7.5 md:text-base 2xl:mb-12.5 2xl:text-lg'>
            <p>+370 698 78378</p>
            <p>info@esperanzaresort.lt</p>
            <p>Paunguriai, Trakai, Lithuania 21282</p>
          </div>
          <div className='relative flex items-center justify-center'>
            <div className='relative w-full max-w-[822px]'>
              <form className='flex h-11 md:h-12.5 2xl:h-15'>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full rounded-full bg-gray-200 px-4.5 py-1 text-sm text-gray-800 placeholder-gray-300 placeholder:text-sm focus:outline-none md:px-6 md:text-base md:placeholder:text-base'
                  required
                />
                <button
                  type='submit'
                  className='absolute right-[4px] h-9 w-28 cursor-pointer self-center rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 md:right-[4px] md:h-10.5 md:w-38 md:text-base 2xl:right-[5px] 2xl:h-12.5 2xl:w-60 2xl:text-lg'
                >
                  Sign up
                </button>
              </form>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='ml-4 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-800 md:h-10.5 md:w-10.5 xl:absolute xl:right-20 2xl:h-12.5 2xl:w-12.5'
              aria-label='Back to top'
            >
              <ScrollTopIcon className='h-4 w-4 md:h-4.5 md:w-4.5 2xl:w-5 2xl:md:h-5' />
            </button>
          </div>
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className='p-4 md:p-4.5 2xl:p-5'>
          <p className='text-center text-xs font-medium text-gray-900 md:text-sm 2xl:text-base'>
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
