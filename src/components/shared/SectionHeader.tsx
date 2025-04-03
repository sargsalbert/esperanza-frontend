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
          <svg
            width='17'
            height='16'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928933C9.95262 0.538409 9.31946 0.538409 8.92893 0.928933C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM-7.6495e-08 9L16 9L16 7L7.6495e-08 7L-7.6495e-08 9Z'
              fill='#362E25'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
