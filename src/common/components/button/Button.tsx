import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <div className="button-box">
      <button className="button-text" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
