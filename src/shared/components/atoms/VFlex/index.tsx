import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const VFlex = ({ children, className, ...divProps }: Props & ComponentProps<'div'>) => {
  return (
    <div className={clsx('flex-col', className)} {...divProps}>
      {children}
    </div>
  );
};
