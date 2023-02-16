import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
  notInputBox?: boolean;
}

export default function InputContainer({ children, className = '', title, notInputBox }: Props) {
  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      <div className={`${notInputBox ? '' : 'input-box'} ${className}`}>
        {children}
      </div>
    </div>
  );
}