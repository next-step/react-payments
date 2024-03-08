import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <div className="button-box">
      <button className="button-text" {...props}>
        {children}
      </button>
    </div>
  );
}
