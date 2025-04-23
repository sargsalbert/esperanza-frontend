import { ButtonConfig } from './types';

interface ActionsProps {
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

const Actions = ({ secondaryButton, primaryButton }: ActionsProps) => {
  return (
    <div
      className={`flex shrink-0 space-x-[14px] md:space-x-[36px] ${secondaryButton ? 'justify-center md:justify-between' : 'justify-center md:justify-end'}`}
    >
      {secondaryButton && (
        <button
          onClick={secondaryButton.onClick}
          className={`h-9 cursor-pointer rounded-full border-2 border-gray-800 bg-transparent px-5 py-1 text-sm font-semibold text-gray-800 md:h-10.5 md:text-base 2xl:h-12.5 2xl:border-3 2xl:text-lg ${secondaryButton ? 'min-w-[126px] md:w-[50%]' : 'min-w-63 md:min-w-38 2xl:min-w-60'} `}
        >
          {secondaryButton.text}
        </button>
      )}
      <button
        onClick={primaryButton.onClick}
        className={`h-9 cursor-pointer rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-sm font-semibold text-gray-50 md:h-10.5 md:text-base 2xl:h-12.5 2xl:border-3 2xl:text-lg ${secondaryButton ? 'min-w-[126px] md:w-[50%]' : 'min-w-63 md:min-w-38 2xl:min-w-60'} `}
      >
        {primaryButton.text}
      </button>
    </div>
  );
};

export default Actions;
