import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
  notInputBox?: boolean;
  anchor?: string;
  errorMessage?: string;
}

export default function InputContainer({ children, className = '', title, notInputBox, anchor, errorMessage }: Props) {
  return (
    <div className="input-container">
      <div className="flex-between">
        <span className="input-title">{title}</span>
        {anchor && (
          <span className="input-title">{anchor}</span>
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