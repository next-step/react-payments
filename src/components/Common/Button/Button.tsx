import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return <button {...props}>{children}</button>;
}
