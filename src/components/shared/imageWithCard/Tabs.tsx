'use client';
import { useEffect, useRef, useState } from 'react';
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
      <div className='mx-auto mb-3 flex w-full justify-around lg:mx-0 lg:mb-4 lg:w-auto lg:justify-start xl:mb-5'>
        {tabs?.map((tab, idx) => (
          <div key={idx} className='flex w-[50%] items-center lg:w-auto'>
            <button
              className={`w-full cursor-pointer py-[2.5%] text-[16px] font-semibold transition-colors xl:text-[17px] ${
                idx === activeTab ? 'text-gray-900' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab?.label}
            </button>
            {idx < tabs.length - 1 && (
              <div className='h-3.5 w-0.5 shrink-0 bg-yellow-500 sm:mx-4.5' />
            )}
          </div>
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
                    className='flex items-center border-b-2 border-b-yellow-500 py-3.5 text-left last:border-b-0'
                  >
                    <span className='w-30 shrink-0 text-xs font-medium text-gray-700 md:w-40 md:text-sm'>
                      {field?.firstTextField}
                    </span>
                    <span className='text-[14px] font-semibold break-all text-gray-900 sm:text-[15px] md:text-base md:break-words'>
                      {field?.secondTextField}
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
