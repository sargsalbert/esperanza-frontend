'use client';
import React, { useEffect, useRef, useState } from 'react';
import StrapiRichTextRenderer from '../StrapiRichTextRenderer';
import { ComponentSharedTabItem, Maybe } from '@/gql/graphql';

interface TabsProps {
  tabs: Maybe<ComponentSharedTabItem>[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateHeights = () => {
      if (window.innerWidth >= 1024 && tabRefs.current.length) {
        const heights = tabRefs.current.map((el) => el?.offsetHeight || 0);
        setMaxHeight(Math.max(...heights));
      } else {
        setMaxHeight(0);
      }
    };

    calculateHeights(); // Initial calculation

    window.addEventListener('resize', calculateHeights);

    return () => {
      window.removeEventListener('resize', calculateHeights);
    };
  }, [tabs]);

  return (
    <>
      {/* Tab buttons */}
      <div className='mx-auto mb-[8px] flex w-full lg:mx-0 lg:mb-4 lg:w-auto lg:justify-start xl:mb-5'>
        {tabs?.map((tab, idx) => (
          <React.Fragment key={idx}>
            <div className='flex-1 lg:flex-none'>
              <button
                className={`w-full cursor-pointer py-[2px] text-center text-[15px] font-semibold transition-colors lg:text-[16px] xl:text-[17px] ${
                  idx === activeTab ? 'text-gray-900' : 'text-gray-700'
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab?.label}
              </button>
            </div>
            {idx < tabs.length - 1 && (
              <div className='mx-[5%] flex h-3.5 w-0.5 shrink-0 self-center bg-yellow-500 lg:mx-4.5' />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Content container with dynamic height */}
      <div
        style={maxHeight ? { height: maxHeight } : undefined}
        className='relative transition-all duration-500'
      >
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            className={`${
              idx === activeTab
                ? 'relative opacity-100'
                : 'pointer-events-none absolute opacity-0'
            } ${
              tab?.useSeparateFields
                ? 'flex h-full flex-col justify-center'
                : ''
            }`}
          >
            {tab?.useSeparateFields && tab?.useTextFieldsInstead ? (
              <div className='my-7'>
                {tab.useTextFieldsInstead.map((field) => (
                  <div
                    key={field?.id}
                    className='flex border-b-2 border-b-yellow-500 py-3.5 text-left last:border-b-0'
                  >
                    <span className='w-30 shrink-0 text-[13px] font-medium text-gray-700 md:w-40 md:text-[15px]'>
                      {field?.firstTextField}
                    </span>
                    <span className='text-[13px] font-semibold break-all text-gray-900 md:text-[15px] md:break-words'>
                      {field?.secondTextField}
                      {field?.specialTextField && (
                        <>
                          <br></br>
                          <div className='mt-1.5'>{field.specialTextField}</div>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <StrapiRichTextRenderer content={tab?.tabContent} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
