'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const StrapiRichTextRenderer = ({ content, textCenter = false }) => {
  if (!content) {
    return;
  }

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => (
          <p
            className={`text-center text-[14px] leading-[2em] text-gray-900 sm:text-[15px] lg:leading-8 xl:text-base ${textCenter ? 'lg:text-center' : 'lg:text-left'} `}
          >
            {children}
          </p>
        ),
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            // case 1:
            //   return <Typography variant="h1">{children}</Typography>
            // case 2:
            //   return <Typography variant="h2">{children}</Typography>
            // case 3:
            //   return <Typography variant="h3">{children}</Typography>
            // case 4:
            //   return <Typography variant="h4">{children}</Typography>
            // case 5:
            //   return <Typography variant="h5">{children}</Typography>
            // case 6:
            //   return <Typography variant="h6">{children}</Typography>
            default:
              return <div>{children}</div>;
          }
        },

        list: ({ format, children }) => {
          const Tag = format === 'ordered' ? 'ol' : 'ul';
          const className =
            format === 'ordered'
              ? 'list-decimal pl-6 mb-4'
              : 'columns-1 md:columns-2 list-none gap-x-8 text-[14px] leading-[2em] sm:text-[15px] xl:text-base lg:leading-8';

          return <Tag className={className}>{children}</Tag>;
        },

        'list-item': ({ children }) => (
          <li className='flex break-inside-avoid items-start'>
            <span className='mt-[12px] mr-2.5 inline-flex h-[4px] w-[4px] flex-shrink-0 rounded-full bg-gray-900 md:mt-[12px] md:mr-3 md:h-[5px] md:w-[5px] lg:mt-[13px]'></span>
            <span>{children}</span>
          </li>
        ),

        // link: ({ children, url }) => <Link to={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className='italic'>{children}</span>,
      }}
    />
  );
};

export default StrapiRichTextRenderer;
