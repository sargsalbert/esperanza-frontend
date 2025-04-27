interface InputProps {
  placeholder?: string;
  type?: string;
}

const Input = ({ placeholder, type = 'text' }: InputProps) => {
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   // const { name, value } = e.target;
  //   // setForm((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <div className='mb-5 sm:mb-7.5 lg:mb-10'>
      <input
        type={type}
        // id='date'
        // name='date'
        // value={form.date}
        // onChange={handleChange}
        placeholder={placeholder}
        className='placeholder-font-medium min-h-10 w-full border-b-2 border-gray-200 py-2.5 text-sm font-medium placeholder-gray-300 transition outline-none focus:border-gray-300 sm:border-b-3 sm:text-base md:min-h-12.5'
      />
    </div>
  );
};

export default Input;
