import { ReactNode } from "react";

const H2Text = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <h2 className={className}>{children}</h2>;
};

export default H2Text;
