import { ElementType, PropsWithChildren } from 'react';

type BoxProps<T extends ElementType> = {
  as?: T;

  className?: string;
};

export default function Box<T extends ElementType = 'div'>({
  as,

  className,
  children,
}: PropsWithChildren<BoxProps<T>>) {
  const Element = as || 'div';

  return <Element className={className}>{children}</Element>;
}
