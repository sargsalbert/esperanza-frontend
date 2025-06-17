import { MinusIcon } from '../../icons/minusIcon';
import { PlusIcon } from '../../icons/plusIcon';

type GuestCounterProps = {
  label: string;
  name: 'adults' | 'children' | 'rooms';
  value: number;
  min?: number;
  max?: number;
  onChange: (name: 'adults' | 'children' | 'rooms', value: number) => void;
};

const GuestCounter = ({
  label,
  name,
  value,
  onChange,
  min = 0,
  max = Infinity,
}: GuestCounterProps) => {
  const handleDecrease = () => {
    const newValue = Math.max(min, value - 1);
    onChange(name, newValue);
  };

  const handleIncrease = () => {
    const newValue = Math.min(max, value + 1);
    onChange(name, newValue);
  };

  return (
    <div className='grid grid-cols-[100px_1fr] items-center lg:grid-cols-2'>
      <span className='text-sm font-medium lg:text-base'>{label}</span>
      <div className='flex items-center gap-2'>
        <button
          className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-1 border-gray-800 lg:h-8 lg:w-8'
          type='button'
          onClick={handleDecrease}
          disabled={value <= min}
        >
          <MinusIcon className='h-[12px] w-[12px]' />
        </button>
        <span className='inline-block min-w-[36px] text-center text-base font-medium lg:text-xl'>
          {value}
        </span>
        <button
          className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-1 border-gray-800 lg:h-8 lg:w-8'
          type='button'
          onClick={handleIncrease}
          disabled={value >= max}
        >
          <PlusIcon className='h-[12px] w-[12px]' />
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
