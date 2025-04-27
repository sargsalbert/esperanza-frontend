interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ placeholder, options, value, onChange }: SelectProps) => {
  return (
    <div className='mb-5 sm:mb-7.5 lg:mb-10'>
      <select
        value={value}
        onChange={onChange}
        className='placeholder-font-medium min-h-10 w-full border-b-2 border-gray-200 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none focus:border-gray-300 sm:border-b-3 sm:text-base md:min-h-12.5'
      >
        <option value='' disabled className='text-gray-300'>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
