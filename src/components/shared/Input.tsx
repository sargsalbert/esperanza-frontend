import { useField } from 'formik';

interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onlyClassName?: boolean;
}

const Input = ({
  name,
  placeholder = '',
  type = 'text',
  className = '',
  onlyClassName = false,
}: InputProps) => {
  const [field, meta] = useField(name);

  const defaultClass =
    'placeholder-font-medium min-h-10 w-full border-b-2 border-gray-200 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none focus:border-gray-300 sm:text-base lg:min-h-12.5 lg:border-b-3';

  return (
    <div className={onlyClassName ? 'w-full' : 'mb-5 sm:mb-7.5 lg:mb-10'}>
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        className={onlyClassName ? className : `${defaultClass} ${className}`}
      />
      {meta.touched && meta.error && (
        <p className='mt-1 text-sm text-red-500'>{meta.error}</p>
      )}
    </div>
  );
};

export default Input;
