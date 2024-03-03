import { ReactNode } from "react";

const Flex = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex-center">{children}</div>
    </>
  );
};

export default Flex;
