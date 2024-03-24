import { useEffect } from 'react';

import AddCardForm from 'src/steps/add-card-form/AddCardForm';
import CardList from 'src/steps/card-list/CardList';
import AddCardFinish from 'src/steps/add-card-finish/AddCardFinish';
import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine';
import type { CardInfoWithId } from 'src/types/card.type';

export interface AddCardStepperProps {
	cardList?: CardInfoWithId[];
}

export default function AddCardStepper({ cardList }: AddCardStepperProps) {
	const { send } = useAddCardMachineActorRef();

	const isStateBeforeInitialize = useAddCardMachineSelector(state => state.matches({ CardList: 'beforeInitialize' }));

	useEffect(() => {
		if (isStateBeforeInitialize) {
			send({ type: 'INITIALIZE_CARD_LIST', value: cardList });
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cardList, isStateBeforeInitialize]);

	return (
		<>
			<CardList />
			<AddCardForm />
			<AddCardFinish />
		</>
	);
}
