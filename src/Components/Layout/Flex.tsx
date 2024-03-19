import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className: string;
}

const Flex = ({ children, className }: FlexProps) => {
  return <div className={className}>{children}</div>;
};

export default Flex;
