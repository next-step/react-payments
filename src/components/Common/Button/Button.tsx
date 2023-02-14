import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ type = 'button', children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
