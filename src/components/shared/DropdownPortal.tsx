import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import LocaleLink from './LocaleLink';

interface DropdownPortalProps {
  buttonRef: React.RefObject<HTMLElement>;
  options: {
    optionText?: string | null;
    optionUrl?: string | null;
    newTab?: string | null;
  }[];
  onClose: () => void;
}

const DropdownPortal = ({
  buttonRef,
  options,
  onClose,
}: DropdownPortalProps) => {
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setPos({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    });

    const handleOutside = (e: MouseEvent) => {
      if (!buttonRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, []);

  return createPortal(
    <div
      className='absolute z-[9999] bg-gray-100 break-all shadow-xs'
      style={{
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        width: pos.width,
      }}
    >
      <div className='py-2 lg:py-3'>
        {options.map((opt, i) => (
          <LocaleLink
            key={i}
            href={opt?.optionUrl || ''}
            target={opt?.newTab ? '_blank' : undefined}
            className='block px-4 py-2 text-sm hover:bg-gray-200 lg:text-base'
          >
            {opt.optionText}
          </LocaleLink>
        ))}
      </div>
    </div>,
    document.body,
  );
};

export default DropdownPortal;
