import { ElementType, PropsWithChildren } from 'react';

type InputBoxProps<T extends ElementType> = {
  as?: T;

  className?: string;
};

export default function Box<T extends ElementType = 'div'>({
  as,

  className,
  children,
}: PropsWithChildren<InputBoxProps<T>>) {
  const Element = as || 'div';

  return <Element className={className}>{children}</Element>;
}
