import type { PropsWithChildren } from 'react';
import Header from './Header';

export type Props = { headerTitle?: string; goBack?: string };

function Layout({ children, headerTitle, goBack }: PropsWithChildren<Props>) {
  return (
    <div className="app">
      {headerTitle ? <Header headerTitle={headerTitle} goBack={goBack} /> : null}
      {children}
    </div>
  );
}

export default Layout;
