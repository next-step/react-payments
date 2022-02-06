import React, { PropsWithChildren } from "react";

const Layout = ({
  children,
}: PropsWithChildren<Record<never, any>>): JSX.Element => {
  return <div className="app">{children}</div>;
};

export default Layout;
