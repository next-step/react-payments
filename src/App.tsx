import AddCardPage from '@pages/addCard/AddCardPage';
import AddCardCompletePage from '@pages/addCardComplete/AddCardCompletePage';
import CardsPage from '@pages/cards/CardsPage';
import { CardsProvider, StepperProvider } from '@contexts';

function App() {
	return (
		<main className="app">
			<CardsProvider>
				<StepperProvider>
					<CardsPage />
					<AddCardPage />
					<AddCardCompletePage />
				</StepperProvider>
			</CardsProvider>
		</main>
	);
}

export default App;
