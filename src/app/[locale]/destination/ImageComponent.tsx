'use client';

import FadeInOnView from '@/components/shared/FadeInOnView';
import StrapiImage from '@/components/shared/StrapiImage';
import { UploadFile } from '@/gql/graphql';

type ImageGridProps = {
  imageData?: UploadFile | null;
  index: number;
};

export default function ImageGrid({ imageData, index }: ImageGridProps) {
  const imageStyles = [
    'col-span-1 aspect-[3/2]',
    'col-span-1 row-span-2 aspect-[3/4]  h-full',
    'col-span-1 aspect-[3/2]',
    'col-span-2 aspect-[8/4]',
  ];

  const styleIndex = index % imageStyles.length;
  const style = imageStyles[styleIndex];

  return (
    <FadeInOnView className={`relative w-full ${style}`}>
      {imageData && <StrapiImage image={imageData} />}
    </FadeInOnView>
  );
}
