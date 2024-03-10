import { HTMLAttributes } from "react";

interface InputBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function InputBox({ children, ...props }: InputBoxProps) {
  return (
    <div className="input-box" {...props}>
      {children}
    </div>
  );
}
