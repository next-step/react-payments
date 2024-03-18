import AddCardForm from 'src/steps/add-card-form/AddCardForm';
import CardList from 'src/steps/card-list/CardList';
import AddCardFinish from 'src/steps/add-card-finish/AddCardFinish';
import AutoFocusProvider from 'src/components/common/AutoFocus';

export default function AddCardStepper() {
	return (
		<>
			<CardList />
			<AutoFocusProvider>
				<AddCardForm />
			</AutoFocusProvider>
			<AddCardFinish />
		</>
	);
}
