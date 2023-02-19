import { memo, ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  color?: string;
}

function Button({ children, onClick, className, color }: Props) {
  return (
    <div className={`button-box ${className || ''}`}>
      <button
        type="button"
        className="button-text"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >{children}</button>
    </div>
  );
}

export default memo(Button);