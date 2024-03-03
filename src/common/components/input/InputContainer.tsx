import { HTMLAttributes } from "react";

interface InputContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function InputContainer({
  children,
  ...props
}: InputContainerProps) {
  return (
    <div className="input-container" {...props}>
      {children}
    </div>
  );
}
