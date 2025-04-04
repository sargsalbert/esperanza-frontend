import type React from 'react';
import { Icon } from '../shared/Icon';

export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 24 25' height='24px' width='24px' {...props}>
      <rect
        x='2.12305'
        y='0.83252'
        width='30'
        height='3'
        rx='1.5'
        transform='rotate(45 2.12305 0.83252)'
        fill='#362E25'
      />
      <rect
        y='22.0457'
        width='30'
        height='3'
        rx='1.5'
        transform='rotate(-45 0 22.0457)'
        fill='#362E25'
      />
    </Icon>
  );
}
