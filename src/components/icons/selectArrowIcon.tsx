import type React from 'react';
import { Icon } from '../shared/Icon';

export function SelectArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 14 7' height='7px' width='14px' {...props}>
      <path
        d='M6.26039 6.76113L0.308534 2.15319C-0.102845 1.8347 -0.102845 1.3197 0.308534 1.0046L1.29759 0.238867C1.70897 -0.0796225 2.37418 -0.0796225 2.78118 0.238867L7 3.50508L11.2188 0.238867C11.6302 -0.0796225 12.2954 -0.0796225 12.7024 0.238867L13.6915 1.0046C14.1028 1.32309 14.1028 1.83809 13.6915 2.15319L7.73961 6.76113C7.33698 7.07962 6.67177 7.07962 6.26039 6.76113Z'
        fill='currentColor'
      />
    </Icon>
  );
}
