/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ElementType, PropsWithChildren } from 'react';
import classnames from 'classnames';

type BoxProps<T extends ElementType> = {
  as?: T;
  type?: 'input-box' | 'button-box';
  display?: 'block' | 'inline-block' | 'flex' | 'flex-col';
  justify?: 'center' | 'between';
  align?: 'center';
  className?: string;
};

export default function Box<T extends ElementType = 'div'>({
  as,
  type,
  display,
  justify,
  align,
  className,
  children,
}: PropsWithChildren<BoxProps<T>>) {
  const Element = as || 'div';
  const justifyCss = {
    center: 'justify-center',
    between: 'justify-between',
  }[justify!];
  const alignCss = {
    center: 'align-center',
  }[align!];

  return <Element className={classnames(type, display, justifyCss, alignCss, className)}>{children}</Element>;
}
