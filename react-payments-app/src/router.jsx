import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import CardListPage from './pages/CardListPage/CardListPage';
import CardNicknamePage from './pages/CardNicknamePage/CardNicknamePage';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div id='root'>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '',
        element: <CardListPage />,
      },
      {
        path: '/registration',

        element: <CardRegistrationPage />,
      },
      {
        path: '/completed',
        element: <CardNicknamePage />,
      },
    ],
  },
]);

export default router;
