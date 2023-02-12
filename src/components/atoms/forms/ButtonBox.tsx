import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import classnames from "classnames";

export default function InputBox({
  children,
  className = "",
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) {
  return (
    <div className={classnames("button-box", className)} {...props}>
      {children}
    </div>
  );
}
