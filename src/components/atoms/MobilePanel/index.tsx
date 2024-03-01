import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function MobilePanel({ children, className }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('bg-white w-[375px] min-w-[375px] h-[700] relative rounded-2xl', className)}>
      {children}
    </div>
  );
}
