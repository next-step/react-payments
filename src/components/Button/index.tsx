import { FC } from 'react';
import { ButtonEl } from './buttonStyle';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button: FC<ButtonProps> = ({
  className = '',
  children,
  type = 'submit',
  onClick,
  disabled = false,
}) => {
  return (
    <ButtonEl
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonEl>
  );
};

export default Button;
