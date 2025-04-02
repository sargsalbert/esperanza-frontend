import type React from 'react';
import { Icon } from '../shared/Icon';

export function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 40 23' width='40' height='23' {...props}>
      <rect width='40' height='3' rx='1.5' fill='currentColor' />
      <rect y='10' width='30' height='3' rx='1.5' fill='currentColor' />
      <rect y='20' width='20' height='3' rx='1.5' fill='currentColor' />
    </Icon>
  );
}
