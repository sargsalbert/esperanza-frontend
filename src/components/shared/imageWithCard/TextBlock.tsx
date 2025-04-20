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
}

const TextBlock = ({
  imageFirst,
  title,
  tabs,
  activeTab,
  setActiveTab,
  secondaryButton,
  primaryButton,
}: TextBlockProps) => {
  return (
    <div
      className={`z-10 flex w-[calc(100%-40px)] shrink-0 flex-col justify-between self-center bg-gray-100 px-2.5 py-5 shadow-xs md:min-h-[518px] md:w-[40%] md:p-10 ${imageFirst ? 'md:m-10 md:-ml-[80px] 2xl:m-15 2xl:-ml-[120px]' : 'md:m-10 md:-mr-[80px] 2xl:m-15 2xl:-mr-[120px]'}`}
    >
      <div className='relative flex flex-col justify-center'>
        <div className='mb-0 text-center md:mb-4.5 md:text-left'>
          <h2 className='inline-flex w-[85%] justify-center border-b-2 border-yellow-500 pb-5 text-[20px]/[24px] font-semibold text-gray-800 sm:border-b-3 sm:text-[24px]/[30px] md:w-[75%] md:justify-start md:pb-7.5 md:text-[28px]/[34px]'>
            {title}
          </h2>
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Actions
        secondaryButton={secondaryButton}
        primaryButton={primaryButton}
      />
    </div>
  );
};

export default TextBlock;
