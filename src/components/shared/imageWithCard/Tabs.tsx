interface TabItem {
  id: string | number;
  tabName: string;
  tabContent: string | string[] | [string, string][];
  tabContentType?: 'bullet' | 'twoColumnLine';
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  const tab = tabs[activeTab];

  const renderContent = () => {
    switch (tab.tabContentType) {
      case 'bullet':
        return (
          <ul className='list-disc space-y-2 pl-5'>
            {(tab.tabContent as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'twoColumnLine':
        return (
          <div className=''>
            {(tab.tabContent as [string, string][]).map(([label, value], i) => (
              <div
                key={i}
                className='flex items-center border-b-2 border-b-yellow-500 py-3.5 text-left last:border-b-0'
              >
                <span className='w-30 shrink-0 text-xs font-medium text-gray-700 md:w-40 md:text-sm'>
                  {label}
                </span>
                <span className='overflow-hidden text-sm font-semibold text-gray-900 md:text-lg'>
                  {value}
                </span>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className='text-center text-base leading-6 text-gray-900 md:text-left md:text-base md:leading-8'>
            {tab.tabContent}
          </div>
        );
    }
  };

  return (
    <>
      <div className='mx-auto flex w-[85%] justify-around md:mx-0 md:w-auto md:justify-start'>
        {tabs?.map((tab, idx) => (
          <div key={tab.id} className='flex w-[50%] items-center md:w-auto'>
            <button
              key={idx}
              className={`w-full cursor-pointer p-3 text-base font-semibold transition-colors md:px-0 md:text-lg ${idx === activeTab ? 'text-gray-900' : 'text-gray-700'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.tabName}
            </button>
            {idx < tabs.length - 1 && (
              <div className='h-3.5 w-0.5 shrink-0 bg-yellow-500 md:mx-4.5' />
            )}
          </div>
        ))}
      </div>
      <div className='mt-0 mb-6 md:mt-1'>{renderContent()}</div>
    </>
  );
};

export default Tabs;
