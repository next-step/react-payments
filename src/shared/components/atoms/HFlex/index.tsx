import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const HFlex = ({ children, className, ...divProps }: Props & ComponentProps<'div'>) => {
  return (
    <div className={clsx('flex', className)} {...divProps}>
      {children}
    </div>
  );
};
