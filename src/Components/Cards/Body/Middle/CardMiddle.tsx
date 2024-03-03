import { ReactNode } from "react";

const CardMiddle = ({ children }: { children?: ReactNode }) => {
  return <div className="card-middle">{children}</div>;
};

export default CardMiddle;
