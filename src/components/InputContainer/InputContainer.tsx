import React, { ReactNode } from 'react';

type TInputContainerProps = {
  title: string;
  children: ReactNode;
  width?: number;
  tied?: boolean;
};

function InputContainer({ title, children, width, tied = true }: TInputContainerProps) {
  const inputBoxSizeClass = width ? `w-${width}` : '';

  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      {tied ? <div className={['input-box', inputBoxSizeClass].join(' ').trim()}>{children}</div> : <>{children}</>}
    </div>
  );
}

export default InputContainer;
