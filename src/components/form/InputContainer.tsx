import { memo, ReactNode } from 'react';

interface IInputContainer {
  children: ReactNode;
  title: string;
  className?: string;
  notInputBox?: boolean;
  charLength?: string;
  errorMessage?: string;
}

function InputContainer({ children, className = '', title, notInputBox, charLength, errorMessage }: IInputContainer) {
  return (
    <div className="input-container">
      <div className="flex-between">
        <span className="input-title">{title}</span>
        {charLength && (
          <span className="input-title">{charLength}</span>
        )}
      </div>
      <div className={`${notInputBox ? '' : 'input-box'} ${className}`}>
        {children}
      </div>
      {errorMessage && (
        <span className="error-message">{errorMessage}</span>
      )}
    </div>
  );
}

export default memo(InputContainer);