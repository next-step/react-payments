import { useEffect, ReactNode } from 'react';

import type { CardInfoWithId } from 'src/machines/addCardMachine';
import {
	AddCardMachineProvider,
	useAddCardMachineActorRef,
	useAddCardMachineSelector,
} from 'src/machines/addCardMachine';

export interface PaymentsProviderProps {
	children: ReactNode;
	initialSettings?: {
		cardList?: CardInfoWithId[];
	};
}

export default function PaymentsProvider({ children, initialSettings }: PaymentsProviderProps) {
	const { send } = useAddCardMachineActorRef();

	const isStateBeforeInitialize = useAddCardMachineSelector(state => state.matches({ CardList: 'beforeInitialize' }));

	useEffect(() => {
		if (isStateBeforeInitialize) {
			send({ type: 'INITIALIZE_CARD_LIST', value: initialSettings?.cardList });
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialSettings, isStateBeforeInitialize]);

	return <AddCardMachineProvider>{children}</AddCardMachineProvider>;
}
