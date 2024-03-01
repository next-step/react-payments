import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label?: string;
}

export default function TextInput({ label, ...props }: InputProps) {
  return (
    <div className="input-container">
      <span className="input-title">{label}</span>
      <div className="input-box">
        <input type="text" className="input-basic" {...props} />
      </div>
    </div>
  );
}
