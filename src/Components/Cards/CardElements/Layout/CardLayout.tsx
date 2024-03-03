import { ReactNode } from "react";

const CardLayout = ({ children }: { children?: ReactNode }) => {
  return <div className="card-box">{children}</div>;
};

export default CardLayout;
