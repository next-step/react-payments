import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  type: 'button' | 'submit' | 'reset';
}
const Button = ({ type = 'button', className, children, ...props }: ButtonProps) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
