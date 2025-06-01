import { ComponentSharedActionButton, Maybe } from '@/gql/graphql';
import LocaleLink from '../LocaleLink';

interface ActionsProps {
  button: Maybe<ComponentSharedActionButton>;
  single: boolean;
  index: number;
}

const Actions = ({ button, single, index }: ActionsProps) => {
  const isSingleButton = single;
  const isSecondOfTwo = !single && index === 1;

  const isDark = isSingleButton || isSecondOfTwo;

  return (
    <LocaleLink
      href={button?.buttonUrl || ''}
      target={!!button?.newTab ? '_blank' : undefined}
      className={`flex h-9 items-center justify-center text-center ${isDark ? 'bg-gray-800 text-gray-50' : 'bg-transparent text-gray-800'} cursor-pointer rounded-full border-2 border-gray-800 px-5 py-1 text-sm font-medium md:h-10.5 lg:h-9.5 xl:h-12.5 xl:text-base 2xl:border-3 ${
        single
          ? 'min-w-63 md:min-w-38 2xl:min-w-60'
          : 'min-w-[126px] md:w-[50%]'
      }`}
    >
      {button?.buttonText}
    </LocaleLink>
  );
};

export default Actions;
