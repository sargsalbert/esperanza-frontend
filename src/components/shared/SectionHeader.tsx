import { ComponentSharedSectionText } from '@/gql/graphql';
import { MoreIcon } from '../icons/moreIcon';
import FadeInOnView from './FadeInOnView';
import LocaleLink from './LocaleLink';

type SectionHeaderProps = ComponentSharedSectionText & {
  buttonText?: string | null;
};

const SectionHeader = ({
  subtitle,
  title,
  description,
  buttonText,
  buttonUrl,
  newTab,
}: SectionHeaderProps) => {
  return (
    <FadeInOnView>
      <div className='mx-auto max-w-[1160px] overflow-hidden px-5 pb-5 text-center sm:pb-7.5 md:px-7.5 lg:px-10 2xl:px-15'>
        {subtitle && (
          <p className='mb-7.5 text-[13px] text-gray-900 italic sm:text-base lg:mb-10 xl:mb-15'>
            {subtitle}
          </p>
        )}
        <div className='flex justify-center'>
          <h2 className='mb-3 inline-flex min-w-[300px] justify-center border-b-2 border-yellow-500 px-5 pb-3 text-[20px] font-semibold text-gray-800 uppercase md:px-10 lg:mb-4 lg:min-w-[440px] lg:border-b-3 lg:pb-4 lg:text-[22px] xl:mb-5 xl:pb-5 xl:text-[28px] 2xl:px-15'>
            {title}
          </h2>
        </div>

        <p
          className={`text-[14px]/[26px] sm:text-[16px]/[32px] ${buttonText ? 'pb-3.5 sm:pb-7.5' : 'pb-0'}`}
        >
          {description}
        </p>
        {buttonText && (
          <div className='flex justify-center'>
            <LocaleLink
              href={buttonUrl || ''}
              target={!!newTab ? '_blank' : undefined}
              className='flex cursor-pointer items-center'
            >
              <span className='gray-800 px-2.5 text-[13px]/[15px] font-semibold text-gray-800 sm:text-[16px]/[18px]'>
                {buttonText}
              </span>

              <MoreIcon className='h-3 w-3 sm:h-[16px] sm:w-[17px]' />
            </LocaleLink>
          </div>
        )}
      </div>
    </FadeInOnView>
  );
};

export default SectionHeader;
