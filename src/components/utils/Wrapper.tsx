import { useEffect, ReactNode } from 'react';

import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import AutoFocusProvider from 'src/components/common/AutoFocus';

interface ProviderProps {
	children?: ReactNode;
}

export function SelectToFormLayer({ children }: ProviderProps) {
	const actorRef = useAddCardMachineActorRef();

	useEffect(() => {
		actorRef.send({ type: 'GO_TO_FORM' });
		actorRef.send({ type: 'TOGGLE' });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
}

export function AutoFocusWrapperWithSelectToForm({ children }: ProviderProps) {
	return (
		<AutoFocusProvider>
			<SelectToFormLayer>{children}</SelectToFormLayer>
		</AutoFocusProvider>
	);
}
