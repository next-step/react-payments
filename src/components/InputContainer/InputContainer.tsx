import React, { ReactNode, useMemo } from 'react';

type TInputContainerProps = {
  title: string;
  children: ReactNode;
  width?: number;
  tied?: boolean;
  caption?: string;
};

function InputContainer({ title, children, width, tied = true, caption }: TInputContainerProps) {
  const inputBoxSizeClass = useMemo(() => (width ? `w-${width}` : ''), [width]);

  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      {tied ? <div className={['input-box', inputBoxSizeClass].join(' ').trim()}>{children}</div> : <>{children}</>}
      <div className="input-message">{caption}</div>
    </div>
  );
}

export default InputContainer;
