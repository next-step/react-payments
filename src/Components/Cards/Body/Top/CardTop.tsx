import { ReactNode } from "react";

const CardTop = ({ children }: { children?: ReactNode }) => {
  return <div className="card-top">{children}</div>;
};

export default CardTop;
