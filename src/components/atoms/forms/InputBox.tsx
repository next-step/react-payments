import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export default function InputBox({
  children,
  className,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) {
  return (
    <div className={`input-box ${className}`} {...props}>
      {children}
    </div>
  );
}
