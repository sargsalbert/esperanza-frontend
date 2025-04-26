import { useEffect, useRef, useState } from 'react';
import { TabsData } from './types';

interface TabsProps {
  tabs: TabsData[];
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

  const renderContent = (tab: TabsData) => {
    switch (tab.tabContentType) {
      case 'bullet':
        return (
          <ul className='grid list-disc gap-y-[.7em] pl-5 text-[14px] sm:text-[15px] md:grid-cols-2 md:gap-x-8 xl:gap-x-12 xl:text-base'>
            {(tab.tabContent as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'twoColumnLine':
        return (
          <div className='my-7 lg:my-0'>
            {(tab.tabContent as [string, string][]).map(([label, value], i) => (
              <div
                key={i}
                className='flex items-center border-b-2 border-b-yellow-500 py-3.5 text-left last:border-b-0'
              >
                <span className='w-30 shrink-0 text-xs font-medium text-gray-700 md:w-40 md:text-sm'>
                  {label}
                </span>
                <span className='text-[14px] font-semibold break-all text-gray-900 sm:text-[15px] md:text-base md:break-words'>
                  {value}
                </span>
              </div>
            ))}
          </div>
        );
      case 'paragraphs':
        return (
          <div className='text-center text-[14px] leading-[2em] text-gray-900 sm:text-[15px] lg:text-left lg:leading-8 xl:text-base'>
            {tab.tabContent[0]}
          </div>
        );
      default:
        return (
          <div className='text-center text-[14px] leading-[2em] text-gray-900 sm:text-[15px] lg:text-left lg:leading-8 xl:text-base'>
            {tab.tabContent}
          </div>
        );
    }
  };

  return (
    <>
      {/* Tab buttons */}
      <div className='mx-auto mb-3 flex w-full justify-around lg:mx-0 lg:mb-4 lg:w-auto lg:justify-start xl:mb-5'>
        {tabs?.map((tab, idx) => (
          <div key={tab.id} className='flex w-[50%] items-center lg:w-auto'>
            <button
              className={`w-full cursor-pointer py-[2.5%] text-[16px] font-semibold transition-colors xl:text-[17px] ${
                idx === activeTab ? 'text-gray-900' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.tabName}
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
            key={tab.id}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            className={`${
              idx === activeTab
                ? 'relative opacity-100'
                : 'pointer-events-none absolute opacity-0'
            } ${
              tab.tabContentType === 'twoColumnLine'
                ? 'flex h-full flex-col justify-center'
                : ''
            }`}
          >
            {renderContent(tab)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
