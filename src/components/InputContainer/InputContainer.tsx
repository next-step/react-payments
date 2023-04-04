import React, { ReactNode } from 'react';

type TInputContainerProps = {
  caption: string;
  children: ReactNode;
  width?: number;
};

function InputContainer({ caption, children, width }: TInputContainerProps) {
  const inputBoxSizeClass = width ? `w-${width}` : '';

  return (
    <div className="input-container">
      <span className="input-title">{caption}</span>
      <div className={['input-box', inputBoxSizeClass].join(' ').trim()}>{children}</div>
    </div>
  );
}

export default InputContainer;
