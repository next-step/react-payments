import React, { ReactNode } from 'react';

type TInputContainerProps = {
  caption: string;
  children: ReactNode;
  width?: number;
  tied?: boolean;
};

function InputContainer({ caption, children, width, tied = true }: TInputContainerProps) {
  const inputBoxSizeClass = width ? `w-${width}` : '';

  return (
    <div className="input-container">
      <span className="input-title">{caption}</span>
      {tied ? <div className={['input-box', inputBoxSizeClass].join(' ').trim()}>{children}</div> : <>{children}</>}
    </div>
  );
}

export default InputContainer;
