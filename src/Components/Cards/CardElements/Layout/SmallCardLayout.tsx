import { ReactNode } from "react";

const SmallCardLayout = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className="small-card" onClick={onClick}>
      {children}
    </div>
  );
};
export default SmallCardLayout;
