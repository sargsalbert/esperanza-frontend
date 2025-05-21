'use client';

const Hamburger3 = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <button className='relative z-50 flex h-8 w-8 flex-col justify-center'>
      {/* Top Line - becomes part of X */}
      <span
        className={`absolute h-px rounded-lg bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-4.5 rotate-45' : 'w-4.5 -translate-y-1.5 rotate-0'
        }`}
      />
      {/* Middle Line - becomes other part of X */}
      <span
        className={`absolute h-px rounded-lg bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-4.5 -rotate-45' : 'w-3.5 translate-y-0 rotate-0'
        }`}
      />
      {/* Bottom Line - disappears when open */}
      <span
        className={`absolute h-px rounded-lg bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-0 opacity-0' : 'w-2.5 translate-y-1.5'
        }`}
      />
    </button>
  );
};

export default Hamburger3;
