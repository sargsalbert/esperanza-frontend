'use client';

const Hamburger3 = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <button
      className='relative z-50 flex h-10 w-10 flex-col justify-center'
      aria-label='Toggle Menu'
    >
      {/* Top Line - becomes part of X */}
      <span
        className={`absolute h-px rounded-md bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-[24px] rotate-45' : 'w-[24px] -translate-y-1.5 rotate-0'
        }`}
      />
      {/* Middle Line - becomes other part of X */}
      <span
        className={`absolute h-px rounded-md bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-[24px] -rotate-45' : 'w-[18px] translate-y-0 rotate-0'
        }`}
      />
      {/* Bottom Line - disappears when open */}
      <span
        className={`absolute h-px rounded-md bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-0 opacity-0' : 'w-[12px] translate-y-1.5'
        }`}
      />
    </button>
  );
};

export default Hamburger3;
