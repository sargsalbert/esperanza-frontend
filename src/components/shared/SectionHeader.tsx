import { MoreIcon } from '../icons/moreIcon';

const SectionHeader = ({
  smallTitle,
  title,
  description,
  showKnowMore = true,
}: {
  smallTitle?: string;
  title: string;
  description: string;
  showKnowMore?: boolean;
}) => {
  return (
    <div className='mx-auto max-w-[1160px] overflow-hidden px-5 pb-5 text-center sm:pb-7.5 md:px-10 2xl:px-15'>
      {smallTitle && (
        <p className='mb-7.5 text-[13px] text-gray-900 italic sm:text-base lg:mb-10 xl:mb-15'>
          {smallTitle}
        </p>
      )}
      <div className='flex justify-center'>
        <h2 className='mb-3 inline-flex min-w-full justify-center border-b-2 border-yellow-500 px-5 pb-3 text-[20px] font-semibold text-gray-800 uppercase md:px-10 lg:mb-4 lg:min-w-[483px] lg:border-b-3 lg:pb-4 lg:text-[22px] xl:mb-5 xl:pb-5 xl:text-[28px] 2xl:px-15'>
          {title}
        </h2>
      </div>

      <p
        className={`text-[13px]/[26px] sm:text-[16px]/[32px] ${showKnowMore ? 'pb-3.5 sm:pb-7.5' : 'pb-0'}`}
      >
        {description}
      </p>
      {showKnowMore && (
        <div className='flex justify-center'>
          <button className='flex cursor-pointer items-center'>
            <span className='gray-800 px-2.5 text-[13px]/[15px] font-semibold text-gray-800 sm:text-[16px]/[18px]'>
              Know more
            </span>
            <MoreIcon className='h-3 w-3 sm:h-[16px] sm:w-[17px]' />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
