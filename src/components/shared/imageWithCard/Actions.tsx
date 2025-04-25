import { ButtonConfig } from './types';

interface ActionsProps {
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

const Actions = ({ secondaryButton, primaryButton }: ActionsProps) => {
  return (
    <div
      className={`flex shrink-0 space-x-[14px] lg:space-x-[36px] ${secondaryButton ? 'justify-center lg:justify-between' : 'justify-center lg:justify-end'}`}
    >
      {secondaryButton && (
        <button
          onClick={secondaryButton.onClick}
          className={`h-9 cursor-pointer rounded-full border-2 border-gray-800 bg-transparent px-5 py-1 text-sm font-medium text-gray-800 md:h-10.5 lg:h-9.5 xl:h-12.5 xl:text-base 2xl:border-3 ${secondaryButton ? 'min-w-[126px] md:w-[50%]' : 'min-w-63 md:min-w-38 2xl:min-w-60'} `}
        >
          {secondaryButton.text}
        </button>
      )}
      <button
        onClick={primaryButton.onClick}
        className={`h-9 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-medium text-gray-50 md:h-10.5 lg:h-9.5 xl:h-12.5 xl:text-base 2xl:border-3 ${secondaryButton ? 'min-w-[126px] md:w-[50%]' : 'min-w-63 md:min-w-38 2xl:min-w-60'} `}
      >
        {primaryButton.text}
      </button>
    </div>
  );
};

export default Actions;
