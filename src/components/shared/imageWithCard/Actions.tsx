import { ComponentSharedActionButton, Maybe } from '@/gql/graphql';
import LocaleLink from '../LocaleLink';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useState, useRef } from 'react';
import DropdownPortal from '../DropdownPortal';

interface ActionsProps {
  button: Maybe<ComponentSharedActionButton>;
  single: boolean;
  index: number;
}

const Actions = ({ button, single, index }: ActionsProps) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const buttonRef = useRef<HTMLAnchorElement>(null!);

  if (isMobile === null) return <div />;

  const hasOptions = !!button?.actionButtonOptions?.length;

  const isSingleButton = single;
  const isSecondOfTwo = !single && index === 1;
  const isDark = isSingleButton || isSecondOfTwo;

  const href =
    !isMobile && button?.desktopUrl
      ? button.desktopUrl
      : button?.buttonUrl || '';

  const handleClick = (e: React.MouseEvent) => {
    if (hasOptions) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <>
      <LocaleLink
        ref={buttonRef}
        href={hasOptions ? '' : href}
        target={button?.newTab && !hasOptions ? '_blank' : undefined}
        onClick={handleClick}
        className={`flex h-9 items-center justify-center text-center ${
          isDark ? 'bg-gray-800 text-gray-50' : 'bg-transparent text-gray-800'
        } cursor-pointer rounded-full border-2 border-gray-800 px-5 py-1 text-sm font-medium md:h-10.5 lg:h-9.5 xl:h-12.5 xl:text-base 2xl:border-3 ${
          single
            ? 'min-w-63 md:min-w-38 2xl:min-w-60'
            : 'min-w-[126px] md:w-[50%]'
        }`}
      >
        {button?.buttonText}
      </LocaleLink>

      {open && hasOptions && (
        <DropdownPortal
          buttonRef={buttonRef}
          options={(button.actionButtonOptions ?? [])
            .filter(Boolean)
            .map((opt) => ({
              optionText: opt?.optionText ?? '',
              optionUrl: opt?.optionUrl ?? '',
              newTab: opt?.optionUrl ?? '',
            }))}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Actions;
