import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({ ...props }: TextInputProps) {
  return <input type="text" className="input-basic" {...props} />;
}
