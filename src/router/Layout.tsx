import { Outlet } from 'react-router-dom';

import { CardContextProvider } from 'contexts';

function Layout() {
  return (
    <main>
      <div className="root">
        <CardContextProvider>
          <Outlet />
        </CardContextProvider>
      </div>
    </main>
  );
}

export default Layout;
