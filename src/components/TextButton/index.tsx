import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const TextButton = ({
  className = '',
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button {...props} type="button" className={`text-button ${className}`}>
    {children}
  </button>
);

export default TextButton;
