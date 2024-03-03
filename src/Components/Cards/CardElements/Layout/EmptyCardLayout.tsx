import { ReactNode } from "react";

const EmptyCardLayout = ({ children }: { children?: ReactNode }) => {
  return <div className="empty-card">{children}</div>;
};

export default EmptyCardLayout;
