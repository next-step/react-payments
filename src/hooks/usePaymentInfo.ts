import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import type { CardInfoWithId } from 'src/types/card.type';

const usePaymentInfo = () => {
	const cardList: CardInfoWithId[] = useAddCardMachineSelector(state => state.context.cardList);

	const isInitialized = useAddCardMachineSelector(state => !state.matches({ CardList: 'beforeInitialize' }));

	const currentStep = useAddCardMachineSelector(state => {
		if (state.matches({ CardList: 'afterInitialize' })) {
			return 'CardList';
		}

		if (state.matches('AddCardForm')) {
			return 'AddCardForm';
		}

		return 'AddCardFinish';
	});

	return { cardList, isInitialized, currentStep };
};

export default usePaymentInfo;
