import { createBrowserRouter } from 'react-router-dom';
import AddCardPage from '../pages/addCard/AddCardPage';
import CardsPage from '../pages/cards/CardsPage';
import App from '../App';
import AddCardCompletePage from '../pages/addCardComplete/AddCardCompletePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <CardsPage />,
			},
			{
				path: 'register',
				element: <AddCardPage />,
			},
			{
				path: 'register/complete',
				element: <AddCardCompletePage />,
			},
		],
	},
]);
