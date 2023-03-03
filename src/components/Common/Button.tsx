import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}
function Button({ children, type = 'button', disabled = false, ...props }: ButtonProps) {
  return (
    <button
      className="w-full py-4 px-2 bg-blue-400 text-white font-bold rounded-xl disabled:bg-slate-400"
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
