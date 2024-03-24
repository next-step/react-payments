import { ReactNode } from "react";

const SpanText = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <span className={className}>{children}</span>;
};

export default SpanText;
