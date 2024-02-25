import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';

export default function App() {
	const routes = [
		{
			children: [
				{path: '/', element: <CardListPage />},
				{path: '/add', element: <CardAddPage />},
			],
		},
	];

	const router = createBrowserRouter(routes);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
