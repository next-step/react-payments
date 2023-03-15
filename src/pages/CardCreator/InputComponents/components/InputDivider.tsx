import React, { PropsWithChildren } from 'react';

interface InputDividerProps extends PropsWithChildren {
  hiding: boolean;
  className?: string;
}

export function InputDivider({ hiding, children, className = '' }: InputDividerProps) {
  const dashComponentHideClassName = hiding ? 'hide' : '';

  return <div className={`text-black ${className} ${dashComponentHideClassName}`}>{children}</div>;
}
