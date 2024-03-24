import { useEffect, ReactNode, CSSProperties } from 'react';

import type { CardInfoWithId } from 'src/types/card.type';
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
	styles?: {
		root?: CSSProperties;
		app?: CSSProperties;
	};
}

export function InitializeWrapper({ children, initialSettings }: PaymentsProviderProps) {
	const { send } = useAddCardMachineActorRef();

	const isStateBeforeInitialize = useAddCardMachineSelector(state => state.matches({ CardList: 'beforeInitialize' }));

	useEffect(() => {
		if (isStateBeforeInitialize) {
			send({ type: 'INITIALIZE_CARD_LIST', value: initialSettings?.cardList });
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialSettings, isStateBeforeInitialize]);

	return <>{children}</>;
}

export default function PaymentsProvider({ children, initialSettings, styles }: PaymentsProviderProps) {
	return (
		<div className="root" style={styles?.root}>
			<div className="app" style={styles?.app}>
				<AddCardMachineProvider>
					<InitializeWrapper initialSettings={initialSettings}>{children}</InitializeWrapper>
				</AddCardMachineProvider>
			</div>
		</div>
	);
}
