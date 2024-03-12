import { useAddCardMachineActorRef } from 'src/machines/addCardMachine.ts';
import { useEffect, ReactNode } from 'react';

interface MockAddCardFormProviderProps {
	children?: ReactNode;
}

export function SelectToFormLayer({ children }: MockAddCardFormProviderProps) {
	const actorRef = useAddCardMachineActorRef();

	useEffect(() => {
		actorRef.send({ type: 'GO_TO_FORM' });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
}
