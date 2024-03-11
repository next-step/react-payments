import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Label = ({ children, className, ...props }: Props & ComponentProps<'label'>) => {
  return (
    <label className={clsx('input-title', className)} {...props}>
      {children}
    </label>
  );
};
