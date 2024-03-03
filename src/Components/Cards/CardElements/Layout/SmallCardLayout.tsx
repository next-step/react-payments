import { ReactNode } from "react";

const SmallCardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="small-card">{children}</div>;
};
export default SmallCardLayout;
