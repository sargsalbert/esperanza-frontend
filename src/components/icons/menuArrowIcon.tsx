import type React from 'react';
import { Icon } from '../shared/Icon';

export function MenuArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 7 14' width='7' height='14' {...props}>
      <path
        d='M6.76113 7.73961L2.15319 13.6915C1.8347 14.1028 1.3197 14.1028 1.0046 13.6915L0.238867 12.7024C-0.0796225 12.291 -0.0796226 11.6258 0.238867 11.2188L3.50508 7L0.238867 2.78118C-0.079623 2.3698 -0.079623 1.70459 0.238867 1.29759L1.0046 0.308535C1.32309 -0.102844 1.83809 -0.102844 2.15319 0.308535L6.76113 6.26039C7.07962 6.66302 7.07962 7.32823 6.76113 7.73961Z'
        fill='currentColor'
      />
    </Icon>
  );
}
