import { type ButtonHTMLAttributes, type DetailedHTMLProps, type PropsWithChildren } from 'react';

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
  PropsWithChildren;
const Button = ({ type = 'button', className, children, ...props }: ButtonProps) => (
  <button type={type} className={className} {...props}>
    {children}
  </button>
);

export default Button;
