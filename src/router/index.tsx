import { createBrowserRouter } from 'react-router-dom';
import { CardList, RegisterCard, RegisterComplete } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardList/>
  },
  {
    path: '/register',
    element: <RegisterCard/>
  },
  {
    path: '/register-complete',
    element: <RegisterComplete/>
  }
]);

export default router;