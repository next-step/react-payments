import { HTMLAttributes } from "react";

interface InputLabelProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function InputLabel({ children, ...props }: InputLabelProps) {
  return (
    <span className="input-title" {...props}>
      {children}
    </span>
  );
}
