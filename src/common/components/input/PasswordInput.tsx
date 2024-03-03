import { InputHTMLAttributes } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput({ ...props }: PasswordInputProps) {
  return <input type="password" className="input-basic" {...props} />;
}
