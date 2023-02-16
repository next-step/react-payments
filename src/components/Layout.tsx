import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main>
      <div className="root">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
