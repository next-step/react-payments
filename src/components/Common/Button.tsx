import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}
function Button({ children, type = 'button', disabled = false }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        background: 'none',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        color: `${disabled ? 'gray' : 'black'}`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
