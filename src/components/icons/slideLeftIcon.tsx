import type React from 'react';
import { Icon } from '../shared/Icon';

export function SlideLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 11 22' height='22px' width='11px' {...props}>
      <path
        d='M1.21342 11.9733L7.80277 20.8118C8.25821 21.4227 8.99467 21.4227 9.44526 20.8118L10.5403 19.343C10.9957 18.7321 10.9957 17.7443 10.5403 17.1399L5.86957 10.875L10.5403 4.61001C10.9957 3.99912 10.9957 3.01128 10.5403 2.40688L9.44526 0.938133C8.98982 0.327236 8.25336 0.327236 7.80277 0.938133L1.21342 9.77664C0.757976 10.3745 0.757976 11.3624 1.21342 11.9733Z'
        fill='currentColor'
        fillOpacity='0.8'
      />
    </Icon>
  );
}
