import Tabs from './Tabs';
import Actions from './Actions';
import { Dispatch, SetStateAction } from 'react';
import { ComponentSharedTabbedSliderBlock } from '@/gql/graphql';

type TextBlockProps = ComponentSharedTabbedSliderBlock & {
  imageFirst: boolean;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  uiType?: string;
};

const TextBlock = ({
  imageFirst,
  title,
  tabItem,
  infoLineText,
  activeTab,
  setActiveTab,
  uiType,
  actionButton,
}: TextBlockProps) => {
  return (
    <div
      className={`z-10 flex shrink-0 flex-col ${
        uiType === 'collapse'
          ? 'mx-7.5 w-full px-7.5 pb-7.5 after:absolute after:bottom-0 after:left-1/2 after:block after:h-[2px] after:w-[calc(100%-40px)] after:translate-x-[-50%] after:bg-gray-200 after:content-[""] sm:px-10 sm:pb-10 after:sm:w-[calc(100%-60px)] after:md:w-[calc(100%-80px)] lg:w-[50%] after:lg:content-none xl:w-[45%] 2xl:w-[40%]'
          : 'w-[calc(100%-40px)] md:w-[calc(100%-60px)] lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'
      } justify-between self-center bg-gray-100 px-2.5 pt-4 pb-5 shadow-xs md:p-6 lg:self-stretch lg:p-7 xl:p-8 2xl:self-center ${
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
        <Tabs
          tabs={tabItem ?? []}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className='flex flex-col items-center justify-between lg:flex-row'>
        {!!infoLineText && (
          <p className='mb-6 text-[14px] font-medium text-gray-900 sm:text-[15px] lg:mb-0 xl:text-base'>
            {infoLineText}
          </p>
        )}

        {/* {actionButton?.length &&
          actionButton.length > 0 &&
          actionButton.map((button, index) => (
            <Actions
              key={index}
              button={button}
              single={actionButton.length === 1}
              index={index}
            />
          ))} */}

        {Array.isArray(actionButton) && actionButton.length > 0 && (
          <div
            className={`flex shrink-0 space-x-[14px] lg:space-x-[36px] ${
              actionButton.length === 1
                ? 'w-auto justify-center lg:justify-end'
                : 'w-[100%] justify-center lg:justify-between'
            }`}
          >
            {actionButton.map((button, index) => (
              <Actions
                key={index}
                button={button}
                single={actionButton.length === 1}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
