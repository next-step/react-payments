import AddCardForm from 'src/steps/add-card-form/AddCardForm.tsx';
import CardList from 'src/steps/card-list/CardList.tsx';
import AddCardFinish from 'src/steps/add-card-finish/AddCardFinish.tsx';

export default function AddCardStepper() {
	return (
		<>
			<CardList />
			<AddCardForm />
			<AddCardFinish />
		</>
	);
}
