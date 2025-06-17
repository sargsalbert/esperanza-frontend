import { ReactNode } from 'react';
import { SelectArrowIcon } from '../../icons/selectArrowIcon';

type Panel = 'dates' | 'guests';

type Props = {
  label: string;
  openPanel: Panel | null;
  setOpenPanel: (panel: Panel | null) => void;
  value: ReactNode;
  panel: Panel;
};

const BookingSelectorGroup = ({
  label,
  openPanel,
  setOpenPanel,
  value,
  panel,
}: Props) => {
  const isOpen = openPanel === panel;

  return (
    <>
      <div className='mb-1.5 text-left font-medium text-gray-700 lg:mb-5 lg:text-center'>
        {label}
      </div>

      <div
        className='relative flex cursor-pointer justify-between sm:justify-start lg:justify-center'
        onClick={() => setOpenPanel(isOpen ? null : panel)}
      >
        <div className='mr-5 font-medium transition'>{value}</div>

        <SelectArrowIcon
          className={`mr-1 h-[5px] w-[10px] flex-shrink-0 transform self-center text-gray-900 transition-transform duration-300 sm:h-[6px] sm:w-[12px] ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
    </>
  );
};

export default BookingSelectorGroup;
