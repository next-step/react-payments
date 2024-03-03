import { ReactNode } from "react";

const CardBottom = ({ children }: { children?: ReactNode }) => {
  return <div className="card-bottom">{children}</div>;
};

export default CardBottom;
