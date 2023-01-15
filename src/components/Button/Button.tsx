import './button.css';
//
import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement & { children: ReactNode }>;

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button-text" {...props}>
      {children}
    </button>
  );
};

export default Button;
