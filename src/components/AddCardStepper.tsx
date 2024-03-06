import AddCardForm from 'src/components/AddCardForm.tsx';
import CardList from 'src/components/CardList.tsx';
import AddCardFinish from 'src/components/AddCardFinish.tsx';
import { AddCardMachineProvider } from 'src/state/addCardMachine.ts';

export default function AddCardStepper() {
	return (
		<AddCardMachineProvider>
			<CardList />
			<AddCardForm />
			<AddCardFinish />
		</AddCardMachineProvider>
	);
}
