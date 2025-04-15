import { ButtonConfig } from './imageWithCard';

interface ActionsProps {
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

const Actions = ({ secondaryButton, primaryButton }: ActionsProps) => {
  return (
    <div
      className={`flex space-x-4 ${secondaryButton ? 'justify-center sm:justify-between' : 'justify-center sm:justify-end'}`}
    >
      {secondaryButton && (
        <button
          onClick={secondaryButton.onClick}
          className='h-9 min-w-32 cursor-pointer rounded-full border-2 border-gray-800 px-4 text-sm font-semibold text-gray-800 sm:h-12.5 sm:w-[calc(50%-18px)] sm:border-3 sm:text-base'
        >
          {secondaryButton.text}
        </button>
      )}

      <button
        onClick={primaryButton.onClick}
        className='h-9 min-w-32 cursor-pointer rounded-full bg-gray-800 px-4 text-sm font-semibold text-gray-50 sm:h-12.5 sm:w-[calc(50%-18px)] sm:text-base'
      >
        {primaryButton.text}
      </button>
    </div>
  );
};

export default Actions;
