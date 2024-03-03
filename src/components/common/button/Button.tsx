import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  type: 'button' | 'submit' | 'reset';
}
const Button = ({ type, className, children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
