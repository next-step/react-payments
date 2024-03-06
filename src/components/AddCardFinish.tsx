import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';

export default function AddCardFinish() {
	const [state] = useAddCardMachineActor();

	if (state.matches('nickname')) {
		return <div>finish</div>;
	}

	return null;
}
