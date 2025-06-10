'use client';
import LanguageSelector from './LanguageSelector';
import { MemberHotelsIcon } from '../icons/memberHotelsIcon';
import { ScrollTopIcon } from '../icons/scrollTopIcon';
import { GlobalQuery } from '@/gql/graphql';
import LocaleLink from './LocaleLink';
import Image from 'next/image';
import SubscribeForm from './SubscribeForm';

type FooterProps = {
  global: GlobalQuery['global'];
};

export function Footer({ global }: FooterProps) {
  return (
    <footer>
      <div className='bg-gray-100'>
        <div className='w-full px-5 py-7.5 md:py-10 2xl:py-12.5'>
          <div className='mb-7.5 flex justify-center text-center text-gray-800 md:mb-10 2xl:mb-12.5'>
            <MemberHotelsIcon className='h-[40px] w-[157px] md:h-[51px] md:w-[202px] 2xl:h-[64px] 2xl:w-[253px]' />
          </div>
          <div className='mb-7.5 flex justify-center gap-7.5 md:gap-10'>
            {Array.isArray(global?.siteFooterSocial) &&
              global.siteFooterSocial.map((item, i) => (
                <LocaleLink
                  key={i}
                  href={item?.linkUrl || ''}
                  aria-label={item?.icon?.alternativeText || ''}
                  target='_blank'
                  className='relative h-[24.8px] w-[24.8px] md:h-6.5 md:w-6.5 2xl:h-7.5 2xl:w-7.5'
                >
                  {item?.icon?.url && (
                    <Image
                      src={item.icon.url}
                      alt={item.icon?.alternativeText || ''}
                      fill
                      className='object-contain'
                    />
                  )}
                </LocaleLink>
              ))}
          </div>
          <div className='mb-7.5 flex justify-center'>
            <LanguageSelector />
          </div>
          <div className='mb-7.5 space-y-5 text-center text-[13px] font-medium text-gray-800 md:mb-10 md:space-y-7.5 md:text-base 2xl:mb-12.5 2xl:text-lg'>
            {Array.isArray(global?.siteFooterContactLinks) &&
              global?.siteFooterContactLinks.map((button, index) => (
                <div key={index}>
                  <LocaleLink
                    href={button?.buttonUrl || ''}
                    target={button?.newTab ? '_blank' : undefined}
                    className=''
                  >
                    {button?.buttonText}
                  </LocaleLink>
                </div>
              ))}
          </div>
          <div className='relative flex items-center justify-center'>
            <SubscribeForm
              siteFooterFormPlaceholder={global?.siteFooterFormPlaceholder}
              siteFooterFormButtonText={global?.siteFooterFormButtonText}
              siteFooterFormSuccessMessage={
                global?.siteFooterFormSuccessMessage
              }
            />
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
            © {new Date().getFullYear()} {global?.siteFooterBottomText}
            <span className='ml-1 inline-flex underline'>
              {global?.siteFooterBottomTextUnderline}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
