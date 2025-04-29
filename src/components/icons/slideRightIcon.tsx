import type React from 'react';
import { Icon } from '../shared/Icon';

export function SlideRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Icon viewBox='0 0 11 22' height='22px' width='11px' {...props}>
      <path
        d='M10.5366 9.77673L3.94723 0.938215C3.49179 0.327318 2.75533 0.327317 2.30474 0.938215L1.20974 2.40697C0.754304 3.01786 0.754303 4.0057 1.20974 4.6101L5.88043 10.875L1.20974 17.14C0.754302 17.7509 0.754302 18.7387 1.20974 19.3431L2.30474 20.8119C2.76018 21.4228 3.49663 21.4228 3.94723 20.8119L10.5366 11.9734C10.992 11.3755 10.992 10.3876 10.5366 9.77673Z'
        fill='currentColor'
        fillOpacity='0.8'
      />
    </Icon>
  );
}
