import { AddCardMachineProvider } from 'src/machines/addCardMachine.ts';
import AddCardStepper from 'src/steps/AddCardStepper.tsx';

export default function AddCard() {
	return (
		<AddCardMachineProvider>
			<AddCardStepper />
		</AddCardMachineProvider>
	);
}
