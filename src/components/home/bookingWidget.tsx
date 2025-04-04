const BookingWidget = () => {
  return (
    <div className='absolute right-0 bottom-0 left-0 z-2 mx-auto block max-w-[1480px] translate-y-1/2 transform overflow-hidden px-5 sm:px-7.5 lg:px-15'>
      <div className='h-[78px] bg-gray-100 shadow-xs md:h-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:min-h-[150px]'>
          {/* Dates */}
          <div className='px-5 py-4 md:my-[13px] md:border-r-2 md:border-gray-700 md:p-5'>
            <div className='mb-2 text-left font-medium text-gray-700 md:text-center'>
              Dates
            </div>
            <button className='flex w-full items-center justify-between text-left'>
              <div className='flex items-center'>
                {/* <Calendar className='mr-2 h-4 w-4 text-[#362E25]' /> */}
                <span className='text-[#362E25]'>
                  {/* {checkInDate} → {checkOutDate} */}
                </span>
              </div>
              {/* <ChevronDown className='h-4 w-4 text-[#362E25]' /> */}
            </button>
          </div>

          {/* Rooms & Guests */}
          <div className='my-[13px] hidden border-b border-gray-700 p-5 md:block md:border-r-2 md:border-b-0'>
            <div className='mb-2 text-center font-medium text-gray-700'>
              Rooms & Guests
            </div>
            <button className='flex w-full items-center justify-between text-left'>
              <div className='flex items-center'>
                {/* <Users className='mr-2 h-4 w-4 text-[#362E25]' /> */}
                {/* <span className='text-[#362E25]'>{roomsGuests}</span> */}
              </div>
              {/* <ChevronDown className='h-4 w-4 text-[#362E25]' /> */}
            </button>
          </div>

          {/* Special Rates */}
          <div className='my-[13px] hidden p-5 md:block'>
            <div className='mb-2 text-center font-medium text-gray-700'>
              Special Rates
            </div>
            <button className='flex w-full items-center justify-between text-left'>
              {/* <span className='text-[#362E25]'>{specialRate}</span>
              <ChevronDown className='h-4 w-4 text-[#362E25]' /> */}
            </button>
          </div>

          {/* Check Availability */}
          <div className='hidden items-center justify-center p-5 md:flex'>
            <button className='w-60 cursor-pointer rounded-[30px] bg-gray-800 px-3 py-2 font-semibold text-gray-50 md:text-nowrap lg:min-h-12.5'>
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
