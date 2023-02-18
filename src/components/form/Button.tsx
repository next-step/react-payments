import { memo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

function Button({ children, onClick, className }: Props) {
  return (
    <div className={`button-box ${className || ''}`} onClick={onClick}>
      <span className="button-text">{children}</span>
    </div>
  );
}

export default memo(Button);