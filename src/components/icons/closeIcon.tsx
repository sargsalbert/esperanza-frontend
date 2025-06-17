import type React from 'react';
import { Icon } from '../shared/Icon';

export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 13 13' height='13px' width='13px' {...props}>
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='1.18213'
          y='0.00012207'
          width='16.7134'
          height='1.67134'
          rx='0.835669'
          transform='rotate(45 1.18213 0.00012207)'
          fill='currentColor'
        />
        <rect
          y='11.8181'
          width='16.7134'
          height='1.67134'
          rx='0.835669'
          transform='rotate(-45 0 11.8181)'
          fill='currentColor'
        />
      </svg>
    </Icon>
  );
}
