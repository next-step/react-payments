import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const AppLayout = ({ children, className }: Props) => {
  return <div className={clsx('app', className)}>{children}</div>;
};
