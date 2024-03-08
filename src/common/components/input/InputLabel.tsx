import { LabelHTMLAttributes } from "react";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function InputLabel({ children, ...props }: InputLabelProps) {
  return (
    <label className="input-label" {...props}>
      {children}
    </label>
  );
}
