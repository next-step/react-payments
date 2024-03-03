import { ReactNode } from "react";

const Layout45 = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="root">
        <div className="app flex-column-center">{children}</div>
      </div>
    </>
  );
};

export default Layout45;
