import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function HFlex({ children, className, ...restProps }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('flex', className)} {...restProps}>
      {children}
    </div>
  );
}
