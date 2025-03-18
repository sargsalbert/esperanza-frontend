import Image from 'next/image';

const ImageWithOverlayCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='relative flex'>
      <div className='relative w-[70%]'>
        <Image
          src={image}
          alt='Descriptive alt text'
          width={700}
          height={400}
          objectFit='contain'
        />
      </div>
      <div className='absolute top-1/2 right-0 mr-4 w-[30%] -translate-y-1/2 bg-amber-200 p-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
        <div className='mt-2 flex items-center justify-between'>
          <button className='text-gray-500'>&lt;</button>
          <button className='text-gray-500'>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlayCard;
