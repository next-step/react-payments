import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="root">
        <div className="app">{children}</div>
      </div>
    </>
  );
};

export default Layout;
