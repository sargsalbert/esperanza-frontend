'use client';

const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <span
        className={`absolute h-0.5 rounded-xl bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'w-[22px] rotate-45 lg:w-[30px] 2xl:w-[36px]'
            : 'w-[22px] -translate-y-1.5 rotate-0 lg:w-[30px] lg:-translate-y-2 2xl:w-[36px] 2xl:-translate-y-2.5'
        }`}
      />
      <span
        className={`absolute h-0.5 rounded-xl bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'w-[22px] -rotate-45 lg:w-[30px] 2xl:w-[36px]'
            : 'w-[16px] translate-y-0 rotate-0 lg:w-[22px] 2xl:w-[26px]'
        }`}
      />
      <span
        className={`absolute h-0.5 rounded-xl bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'w-0 opacity-0'
            : 'w-[10px] translate-y-1.5 lg:w-[12px] lg:translate-y-2 2xl:w-[16px] 2xl:translate-y-2.5'
        }`}
      />
    </>
  );
};

export default Hamburger;
