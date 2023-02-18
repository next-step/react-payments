import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <div className="button-box" onClick={onClick}>
      <span className="button-text">{children}</span>
    </div>
  );
}