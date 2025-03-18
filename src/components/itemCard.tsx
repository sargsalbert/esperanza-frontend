import Image from 'next/image';

const ItemCard = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <Image
        width={500}
        height={500}
        src={imageUrl}
        alt='A beautiful view'
        className='object-contain'
      />
      <div className='bg-silver-300 flex flex-1 flex-col px-7 pt-8 pb-12'>
        <div className='text-2xl'>{title}</div>
        <div className='text-base'>{description}</div>
      </div>
    </div>
  );
};

export default ItemCard;
