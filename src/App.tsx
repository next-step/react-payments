import AddCardPage from '@pages/addCard/AddCardPage';
import AddCardCompletePage from '@pages/addCardComplete/AddCardCompletePage';
import CardsPage from '@pages/cards/CardsPage';
import { StepperProvider } from './contexts/StepperContext';

function App() {
	return (
		<main className="app">
			<StepperProvider>
				<CardsPage />
				<AddCardPage />
				<AddCardCompletePage />
			</StepperProvider>
		</main>
	);
}

export default App;
