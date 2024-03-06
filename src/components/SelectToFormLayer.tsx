import { useAddCardMachineActorRef } from 'src/state/addCardMachine.ts';
import { useEffect, ReactNode } from 'react';

interface MockAddCardFormProviderProps {
	children?: ReactNode;
}

export function SelectToFormLayer({ children }: MockAddCardFormProviderProps) {
	const actorRef = useAddCardMachineActorRef();

	useEffect(() => {
		actorRef.send({ type: 'ADD_CARD' });
	}, [actorRef]);

	return <>{children}</>;
}
