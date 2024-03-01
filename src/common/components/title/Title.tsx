import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  button?: React.ReactNode;
}

export default function Title({ children, button, ...props }: TitleProps) {
  return (
    <h2 className="page-title" {...props}>
      {button && button}
      {children}
    </h2>
  );
}
