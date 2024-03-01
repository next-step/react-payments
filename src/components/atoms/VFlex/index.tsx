import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function VFlex({ children, className, ...restProps }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('flex flex-col', className)} {...restProps}>
      {children}
    </div>
  );
}
