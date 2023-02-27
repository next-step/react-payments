import type { PropsWithChildren } from 'react';
import Header from './Header';

export type Props = { headerTitle?: string; goBack?: string };

function Layout({ children, headerTitle, goBack }: PropsWithChildren<Props>) {
  return (
    <div className="w-full h-full">
      {headerTitle ? <Header headerTitle={headerTitle} goBack={goBack} /> : null}
      <div className="h-full mt-4 flex flex-col">{children}</div>
    </div>
  );
}

export default Layout;
