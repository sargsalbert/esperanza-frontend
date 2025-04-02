const BookingWidget = () => {
  return (
    <div className='absolute right-0 bottom-0 left-0 z-2 mx-auto max-w-6xl translate-y-1/2 transform px-4'>
      <div className='min-h-[155px] bg-gray-100 shadow-xs'>
        <div className='grid min-h-[155px] grid-cols-1 md:grid-cols-4'>
          {/* Dates */}
          <div className='my-[13px] border-b border-gray-700 p-5 md:border-r-2 md:border-b-0'>
            <div className='mb-2 text-center font-medium text-gray-700'>
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
          <div className='my-[13px] border-b border-gray-700 p-5 md:border-r-2 md:border-b-0'>
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
          <div className='my-[13px] p-5'>
            <div className='mb-2 text-center font-medium text-gray-700'>
              Special Rates
            </div>
            <button className='flex w-full items-center justify-between text-left'>
              {/* <span className='text-[#362E25]'>{specialRate}</span>
              <ChevronDown className='h-4 w-4 text-[#362E25]' /> */}
            </button>
          </div>

          {/* Check Availability */}
          <div className='flex items-center justify-center p-5'>
            <button className='min-h-12.5 w-full cursor-pointer rounded-[30px] bg-gray-800 px-6 py-3 font-semibold text-gray-50'>
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
