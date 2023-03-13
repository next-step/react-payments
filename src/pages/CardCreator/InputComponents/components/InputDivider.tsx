import React, { PropsWithChildren } from 'react';

interface InputDividerProps extends PropsWithChildren {
  isHide: boolean;
  className?: string;
}

export function InputDivider({ isHide, children, className = '' }: InputDividerProps) {
  const dashComponentHideClassName = isHide ? 'hide' : '';

  return <div className={`text-black ${className} ${dashComponentHideClassName}`}>{children}</div>;
}
