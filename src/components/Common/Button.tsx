import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}
function Button({ children, type = 'button', disabled = false, ...props }: ButtonProps) {
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
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
