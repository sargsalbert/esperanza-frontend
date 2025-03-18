const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='mx-auto mb-8 max-w-md overflow-hidden text-center md:max-w-2xl'>
      <div className='mb-4 underline decoration-4 underline-offset-8'>
        <p className='text-3xl'>{title}</p>
      </div>
      <p className='text-base'>{description}</p>
    </div>
  );
};

export default SectionHeader;
