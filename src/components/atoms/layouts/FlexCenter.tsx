import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

export default function FlexCenter({
  children,
  className,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) {
  return (
    <div className={classNames("flex-center", className)} {...props}>
      {children}
    </div>
  );
}
