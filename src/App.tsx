import AddCardPage from '@pages/addCard/AddCardPage';
import EditCardAliasPage from '@pages/editCardAlias/EditCardAliasPage';
import CardsPage from '@pages/cards/CardsPage';
import { CardsProvider, StepperProvider } from '@contexts';

function App() {
	return (
		<main className="app">
			<CardsProvider>
				<StepperProvider>
					<CardsPage />
					<AddCardPage />
					<EditCardAliasPage />
				</StepperProvider>
			</CardsProvider>
		</main>
	);
}

export default App;
