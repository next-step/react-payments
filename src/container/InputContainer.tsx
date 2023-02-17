import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
  notInputBox?: boolean;
  anchor?: string;
}

export default function InputContainer({ children, className = '', title, notInputBox, anchor }: Props) {
  return (
    <div className="input-container">
      <div className="flex-between">
        <span className="input-title">{title}</span>
        <span className="input-title">{anchor}</span>
      </div>
      <div className={`${notInputBox ? '' : 'input-box'} ${className}`}>
        {children}
      </div>
    </div>
  );
}