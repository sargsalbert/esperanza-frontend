import Tabs from './Tabs';
import Actions from './Actions';
import { ButtonConfig, TabsData } from './types';
import { Dispatch, SetStateAction } from 'react';

interface TextBlockProps {
  imageFirst: boolean;
  title: string;
  tabs: TabsData[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
  uiType?: 'collapse';
}

const TextBlock = ({
  imageFirst,
  title,
  tabs,
  activeTab,
  setActiveTab,
  secondaryButton,
  primaryButton,
  uiType,
}: TextBlockProps) => {
  return (
    <div
      className={`z-10 flex shrink-0 flex-col ${
        uiType === 'collapse'
          ? 'w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'
          : 'w-[calc(100%-40px)] md:w-[calc(100%-80px)] lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'
      } justify-between self-center bg-gray-100 p-3 shadow-xs md:p-6 lg:self-stretch lg:p-7 xl:p-8 2xl:self-center ${
        imageFirst
          ? 'lg:my-15 lg:mr-10 lg:-ml-30 2xl:my-22.5 2xl:mr-15 2xl:-ml-45'
          : 'lg:my-15 lg:-mr-30 lg:ml-10 2xl:my-22.5 2xl:-mr-45 2xl:ml-15'
      }`}
    >
      <div className='relative mb-6 flex flex-col justify-center xl:mb-8'>
        <div
          className={`text-center lg:text-left ${uiType === 'collapse' ? 'hidden lg:block' : 'block'}`}
        >
          <h2 className='mb-3 inline-flex min-w-full justify-center border-b-2 border-yellow-500 pb-3 text-[20px] font-semibold text-gray-800 uppercase lg:mb-4 lg:min-w-[60%] lg:justify-start lg:border-b-3 lg:pr-5 lg:pb-4 lg:text-[22px] xl:mb-5 xl:pr-6 xl:pb-5 xl:text-[28px]'>
            {title}
          </h2>
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {!secondaryButton && tabs[activeTab].tabContentType === 'paragraphs' ? (
        <div className='flex flex-col items-center justify-between lg:flex-row'>
          <p className='mb-6 text-[14px] font-medium text-gray-900 sm:text-[15px] lg:mb-0 xl:text-base'>
            {tabs[activeTab].tabContent[1]}
          </p>
          <Actions
            secondaryButton={secondaryButton}
            primaryButton={primaryButton}
          />
        </div>
      ) : (
        <Actions
          secondaryButton={secondaryButton}
          primaryButton={primaryButton}
        />
      )}
    </div>
  );
};

export default TextBlock;
