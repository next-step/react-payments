import AddCardForm from 'src/steps/AddCardForm.tsx';
import CardList from 'src/steps/CardList.tsx';
import AddCardFinish from 'src/steps/AddCardFinish.tsx';
import { AddCardMachineProvider } from 'src/machines/addCardMachine.ts';

export default function AddCardStepper() {
	return (
		<AddCardMachineProvider>
			<CardList />
			<AddCardForm />
			<AddCardFinish />
		</AddCardMachineProvider>
	);
}
