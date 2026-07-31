/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { UploadFile } from '@/gql/graphql';

type StrapiImageProps = {
  image: UploadFile;
  className?: string;
};

// const MEDIA_DOMAIN = 'https://media.esperanzaresort.lt';

const MEDIA_DOMAIN = 'https://esperanza-media.fra1.cdn.digitaloceanspaces.com';

type ImageFormat = {
  url: string;
  width: number;
};

const getBestSrc = (image: UploadFile): string => {
  const formatOrder: (keyof typeof image.formats)[] = [
    'medium',
    'small',
    'thumbnail',
    'large',
  ];

  for (const key of formatOrder) {
    const format = image.formats?.[key] as ImageFormat | undefined;
    if (format?.url) {
      const fileName = format.url.split('/').pop();
      if (fileName) return `${MEDIA_DOMAIN}/${fileName}`;
    }
  }

  const originalFileName = image.url.split('/').pop();
  return originalFileName ? `${MEDIA_DOMAIN}/${originalFileName}` : image.url;
};

const getSrcSet = (image: UploadFile): string => {
  if (!image.formats) return `${getBestSrc(image)} 2560w`;

  const entries: string[] = [];

  for (const formatKey in image.formats) {
    const format = image.formats?.[formatKey] as ImageFormat | undefined;
    if (format?.url && format?.width) {
      const fileName = format.url.split('/').pop();
      if (fileName)
        entries.push(`${MEDIA_DOMAIN}/${fileName} ${format.width}w`);
    }
  }

  const originalFileName = image.url.split('/').pop();
  if (originalFileName)
    entries.push(`${MEDIA_DOMAIN}/${originalFileName} 2560w`);

  return entries.join(', ');
};

const StrapiImage: React.FC<StrapiImageProps> = ({ image, className = '' }) => {
  const src = getBestSrc(image);
  const srcSet = getSrcSet(image);
  const alt = image.alternativeText || '';

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes='100vw'
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

export default StrapiImage;
