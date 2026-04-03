'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const StrapiRichTextRenderer = ({
  content,
  textCenter = false,
  textCenterDesktop = false,
  customListStyles = true,
}) => {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p
            className={`${
              textCenter ? 'text-center' : 'text-left'
            } text-[14px] leading-[2em] text-gray-900 sm:text-[15px] lg:leading-8 xl:text-base ${
              textCenterDesktop ? 'lg:text-center' : 'lg:text-left'
            }`}
          >
            {children}
          </p>
        ),

        heading: ({ children, level }) => {
          switch (level) {
            default:
              return <div>{children}</div>;
          }
        },

        list: ({ format, children }) => {
          if (!customListStyles) {
            const Tag = format === 'ordered' ? 'ol' : 'ul';

            const className =
              format === 'ordered'
                ? 'list-decimal text-gray-900 pl-6'
                : 'list-disc text-gray-900 pl-6';

            return <Tag className={className}>{children}</Tag>;
          }

          const Tag = format === 'ordered' ? 'ol' : 'ul';
          const className =
            format === 'ordered'
              ? 'list-decimal pl-6 mb-4'
              : 'columns-1 md:columns-2 list-none gap-x-8 text-[14px] leading-[2em] sm:text-[15px] xl:text-base lg:leading-8';

          return <Tag className={className}>{children}</Tag>;
        },

        'list-item': ({ children }) => {
          if (!customListStyles) {
            return <li>{children}</li>;
          }

          return (
            <li className='flex break-inside-avoid items-start'>
              <span className='mt-[12px] mr-2.5 inline-flex h-[4px] w-[4px] flex-shrink-0 rounded-full bg-gray-900 md:mt-[12px] md:mr-3 md:h-[5px] md:w-[5px] lg:mt-[13px]'></span>
              <span>{children}</span>
            </li>
          );
        },
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className='italic'>{children}</span>,
      }}
    />
  );
};

export default StrapiRichTextRenderer;
