import { AddCardMachineProvider } from 'src/machines/addCardMachine';
import AddCardStepper from 'src/steps/AddCardStepper';

export default function AddCard() {
	return (
		<AddCardMachineProvider>
			<AddCardStepper />
		</AddCardMachineProvider>
	);
}
