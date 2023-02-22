import { createBrowserRouter } from 'react-router-dom';
import { CardList, RegisterCard, RegisterComplete } from '../pages';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <CardList/>
      },
      {
        path: 'register',
        element: <RegisterCard/>
      },
      {
        path: 'register-complete',
        element: <RegisterComplete/>
      }
    ]
  }
], {
  basename: '/react-payments'
});

export default router;