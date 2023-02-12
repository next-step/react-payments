import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import classnames from "classnames";

type TBaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export default function PageTitle({
  children,
  className,
  ...props
}: PropsWithChildren<TBaseProps>) {
  return (
    <h2 className={classnames("page-title", className)} {...props}>
      {children}
    </h2>
  );
}
