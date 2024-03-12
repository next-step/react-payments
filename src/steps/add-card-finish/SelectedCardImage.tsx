import { shallowEqual } from '@xstate/react';

import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardImage from 'src/components/common/CardImage';

export default function SelectedCardImage() {
	const {
		cardCompanyCode,
		cardOwnerName,
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
		cardExpirationDate,
	} = useAddCardMachineSelector(
		state => ({
			cardCompanyCode: state.context.selectedCard.cardCompanyCode,
			cardOwnerName: state.context.selectedCard.cardOwnerName,
			cardNumberFirstSegment: state.context.selectedCard.cardNumberFirstSegment,
			cardNumberSecondSegment: state.context.selectedCard.cardNumberSecondSegment,
			cardNumberThirdSegment: state.context.selectedCard.cardNumberThirdSegment,
			cardNumberFourthSegment: state.context.selectedCard.cardNumberFourthSegment,
			cardExpirationDate: state.context.selectedCard.cardExpirationDate,
		}),
		shallowEqual,
	);

	return (
		<CardImage
			cardCompanyCode={cardCompanyCode}
			cardOwnerName={cardOwnerName}
			cardNumberFirstSegment={cardNumberFirstSegment}
			cardNumberSecondSegment={cardNumberSecondSegment}
			cardNumberThirdSegment={cardNumberThirdSegment}
			cardNumberFourthSegment={cardNumberFourthSegment}
			cardExpirationDate={cardExpirationDate}
			size="big"
		/>
	);
}
