import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({ className, children, ...restProps }: ComponentProps<'button'>) {
  return (
    <button type="button" className={twMerge('disabled:opacity-40 py-2 px-3', className)} {...restProps}>
      {children}
    </button>
  );
}
