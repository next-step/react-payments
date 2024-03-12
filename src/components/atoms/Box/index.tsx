import clsx from 'clsx';
import { ComponentProps } from 'react';

export const Box = ({ children, className, ...divProps }: ComponentProps<'div'>) => {
  return (
    <div className={clsx(className)} {...divProps}>
      {children}
    </div>
  );
};
