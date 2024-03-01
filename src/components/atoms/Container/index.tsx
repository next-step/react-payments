import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Container({ children, className }: ComponentProps<'div'>) {
  return <div className={twMerge('h-full px-6 py-4', className)}>{children}</div>;
}
