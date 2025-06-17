import type React from 'react';
import { Icon } from '../shared/Icon';

export function NoAvailabilityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 11 11' height='11px' width='11px' {...props}>
      <rect
        x='0.482422'
        width='13.4821'
        height='0.674104'
        rx='0.337052'
        transform='rotate(45 0.482422 0)'
        fill='currentColor'
      />
      <rect
        y='9.60071'
        width='13.4821'
        height='0.674104'
        rx='0.337052'
        transform='rotate(-45 0 9.60071)'
        fill='currentColor'
      />
    </Icon>
  );
}
