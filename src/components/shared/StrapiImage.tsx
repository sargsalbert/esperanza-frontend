/* eslint-disable @next/next/no-img-element */
import { UploadFile } from '@/gql/graphql';
import React from 'react';

type StrapiImageProps = {
  image: UploadFile;
  className?: string;
};

const getImageSrcSet = (
  formats: StrapiImageProps['image']['formats'],
  originalUrl: string,
): string => {
  if (!formats) return originalUrl;

  const { thumbnail, small, medium, large } = formats;

  return [
    thumbnail ? `${thumbnail.url} ${thumbnail.width}w` : null,
    small ? `${small.url} ${small.width}w` : null,
    medium ? `${medium.url} ${medium.width}w` : null,
    large ? `${large.url} ${large.width}w` : null,
    `${originalUrl} 2560w`,
  ]
    .filter(Boolean)
    .join(', ');
};

const getBestSrc = (
  formats: StrapiImageProps['image']['formats'],
  originalUrl: string,
): string => {
  return (
    formats?.medium?.url ||
    formats?.small?.url ||
    formats?.thumbnail?.url ||
    originalUrl
  );
};

const StrapiImage: React.FC<StrapiImageProps> = ({ image, className = '' }) => {
  const src = getBestSrc(image.formats, image.url);
  const srcSet = getImageSrcSet(image.formats, image.url);
  const alt = image.alternativeText || '';

  return (
    <img
      src={src}
      srcSet={srcSet}
      // sizes='100vw'
      sizes='(max-width: 640px) 480px, (max-width: 1024px) 768px, 100vw'
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

export default StrapiImage;
