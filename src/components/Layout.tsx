import React, { ReactNode } from 'react';
import { App, Root } from '../common/styles';

interface LayoutProps {
  children: ReactNode;
  flexColumnCenter?: boolean;
}

const Layout = ({ children, flexColumnCenter = false }: LayoutProps) => {
  return (
    <Root>
      <App flexColumnCenter={flexColumnCenter}>{children}</App>
    </Root>
  );
};

export default Layout;
