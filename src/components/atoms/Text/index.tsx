import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Text = ({ children, className, ...spanProps }: Props & ComponentProps<'span'>) => {
  return (
    <span className={clsx(className)} {...spanProps}>
      {children}
    </span>
  );
};
