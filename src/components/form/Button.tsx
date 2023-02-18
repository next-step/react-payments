import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: Props) {
  return (
    <div className={`button-box ${className || ''}`} onClick={onClick}>
      <span className="button-text">{children}</span>
    </div>
  );
}