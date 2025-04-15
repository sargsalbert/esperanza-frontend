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
      <div className='sm: mb-6 flex justify-center sm:justify-start'>
        {tabs?.map((tab, idx) => (
          <div key={tab.id} className='flex items-center'>
            <button
              key={idx}
              className={`cursor-pointer text-base font-semibold transition-colors sm:text-lg ${idx === activeTab ? 'text-gray-900' : 'text-gray-700'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.tabName}
            </button>
            {idx < tabs.length - 1 && (
              <div className='mx-4.5 h-3.5 w-0.5 bg-yellow-500' />
            )}
          </div>
        ))}
      </div>
      <div className='mb-6 text-base leading-8'>
        {tabs && tabs.length > 0 ? tabs[activeTab]?.tabContent : ''}
      </div>
    </>
  );
};

export default Tabs;
