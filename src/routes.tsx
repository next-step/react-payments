import CardAddPage from './pages/CardAddPage';
import CardListPage from './pages/CardListPage';

const routes = [
	{
		children: [
			{path: '/', element: <CardListPage />},
			{path: '/add', element: <CardAddPage />},
		],
	},
];

export default routes;
