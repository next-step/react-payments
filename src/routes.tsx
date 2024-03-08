import CardAddPage from './pages/CardAddPage';
import CardCompletePage from './pages/CardCompletePage';
import CardListPage from './pages/CardListPage';

const routes = [
  {
    children: [
      { path: '/', element: <CardListPage /> },
      { path: '/add', element: <CardAddPage /> },
      { path: '/add/complete', element: <CardCompletePage /> },
    ],
  },
];

export default routes;
