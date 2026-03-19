'use client';

import { useState } from 'react';
import StrapiRichTextRenderer from './StrapiRichTextRenderer';

type ContentChild = {
  text: string;
  type: string;
};

type ContentItem = {
  type: string;
  children: ContentChild[];
};

type Item = {
  id: number;
  title: string;
  content: ContentItem[];
};

type Props = {
  data: Item[];
};

export default function Accordion({ data }: Props) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className='px-5 md:px-7.5 lg:px-[25%]'>
      {data.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div
            key={item.id}
            className='border-b-2 border-gray-200 focus:border-gray-300 lg:border-b-3'
          >
            {/* Header */}
            <button
              onClick={() => toggle(item.id)}
              className='group flex w-full cursor-pointer items-center justify-between py-5 text-left'
            >
              <span className='text-[18px] font-semibold text-gray-800 uppercase transition lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>
                {item.title.trim()}
              </span>

              {/* Plus / Minus */}
              <span className='relative h-4 w-4 sm:h-5 sm:w-5'>
                {/* horizontal */}
                <span className='absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-gray-700'></span>

                {/* vertical */}
                <span
                  className={`absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
                  }`}
                ></span>
              </span>
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className='overflow-hidden'>
                <div className='pb-7.5 leading-relaxed text-gray-600'>
                  <StrapiRichTextRenderer content={item.content} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
