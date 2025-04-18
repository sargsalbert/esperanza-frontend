interface TabItem {
  id: string | number;
  tabName: string;
  tabContent: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
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
              <div className='h-3.5 w-0.5 bg-yellow-500 md:mx-4.5' />
            )}
          </div>
        ))}
      </div>
      <div className='mt-0 mb-6 text-center text-sm leading-8 md:mt-1 md:text-left md:text-base'>
        {tabs && tabs.length > 0 ? tabs[activeTab]?.tabContent : ''}
      </div>
    </>
  );
};

export default Tabs;
