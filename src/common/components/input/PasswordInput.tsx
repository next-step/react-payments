import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label?: string;
}

export default function PasswordInput({ label, ...props }: InputProps) {
  return (
    <div className="input-container">
      {label && <span className="input-title">{label}</span>}
      <input type="password" className="input-basic" {...props} />
    </div>
  );
}
