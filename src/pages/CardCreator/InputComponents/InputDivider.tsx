import React, { PropsWithChildren } from 'react';

interface InputDividerProps extends PropsWithChildren {
  isHide: boolean;
  className?: string;
}

// 스스로 가리고 나타나는 것을 정할 수 있다.
function InputDivider({ isHide, children, className = '' }: InputDividerProps) {
  const dashComponentHideClassName = isHide ? '' : 'hide';

  return <div className={`text-black ${className} ${dashComponentHideClassName}`}>{children}</div>;
}

export { InputDivider };
