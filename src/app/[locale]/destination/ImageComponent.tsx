'use client';

import Image from 'next/image';

type ImageGridProps = {
  url: string;
  index: number;
};

export default function ImageGrid({ url, index }: ImageGridProps) {
  const imageStyles = [
    'col-span-1 aspect-[3/2]',
    'col-span-1 row-span-2 aspect-[3/4]  h-full',
    'col-span-1 aspect-[3/2]',
    'col-span-2 aspect-[8/4]',
  ];

  const styleIndex = index % imageStyles.length;
  const style = imageStyles[styleIndex];

  return (
    <>
      <div className={`relative w-full ${style}`}>
        <Image
          src={url}
          alt={`Resort ${index + 1}`}
          fill
          objectFit='cover'
          className=''
        />
      </div>
    </>
  );
}
