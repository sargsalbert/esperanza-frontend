import { MoreIcon } from '../icons/moreIcon';

const SectionHeader = ({
  smallTitle,
  title,
  description,
}: {
  smallTitle?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='mx-auto max-w-[1160px] overflow-hidden px-5 pb-5 text-center sm:px-7.5 sm:pb-7.5 lg:px-15'>
      {smallTitle && (
        <p className='mb-7.5 text-[13px] text-gray-900 italic sm:mb-12.5 sm:text-base'>
          {smallTitle}
        </p>
      )}
      <div className='mb-5 sm:mb-7.5'>
        <h2 className='inline-block min-w-[305px] border-b-2 border-yellow-500 px-10 pb-5 text-[20px]/[20px] font-semibold text-gray-800 sm:min-w-[483px] sm:border-b-3 sm:text-[24px]/[24px] md:pb-7.5 md:text-[28px]/[28px]'>
          {title}
        </h2>
      </div>
      <p className='pb-3.5 text-[13px]/[26px] sm:pb-7.5 sm:text-[16px]/[32px]'>
        {description}
      </p>

      <div className='flex justify-center'>
        <button className='flex cursor-pointer items-center'>
          <span className='gray-800 px-2.5 text-[13px]/[15px] font-semibold text-gray-800 sm:text-[16px]/[18px]'>
            Know more
          </span>
          <MoreIcon className='h-3 w-3 sm:h-[16px] sm:w-[17px]' />
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
