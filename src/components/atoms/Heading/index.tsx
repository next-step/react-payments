import clsx from 'clsx';
import { ComponentProps, createElement,ReactNode } from 'react';

interface Props<T> {
  as: T;
  children: ReactNode;
}

export const Heading = <T extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>({
  as,
  children,
  className,
  ...headingProps
}: Props<T> & ComponentProps<T>) => {
  return createElement(as, { className: clsx(className), ...headingProps }, children);
};
