import type React from 'react';
import { Icon } from '../shared/Icon';

export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 15 15' height='15px' width='15px' {...props}>
      <path
        d='M14.1301 8.41677H8.48733V13.6202H5.88299V8.41677H0.240234V6.12029H5.88299V0.887817H8.48733V6.12029H14.1301V8.41677Z'
        fill='currentColor'
      />
    </Icon>
  );
}
