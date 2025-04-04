import type React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

export function Icon({
  children,
  width = '',
  height = '',
  viewBox = '0 0 24 24',
  className = '',
  ...props
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      fill='none'
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}
