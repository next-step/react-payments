import { ReactNode } from "react";

const BigCardLayout = ({ children }: { children?: ReactNode }) => {
  return <div className="big-card">{children}</div>;
};

export default BigCardLayout;
