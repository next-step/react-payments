import { container } from './index.css';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={container}>{children}</div>;
};

export default Layout;
