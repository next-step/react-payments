import { shallowEqual } from '@xstate/react';

import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardImage, { CardImageProps } from 'src/components/common/CardImage';

export interface EnteredCardImageProps {
	styles?: CardImageProps['styles'];
}

export default function EnteredCardImage({ styles }: EnteredCardImageProps) {
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
			cardCompanyCode: state.context.cardInfo.cardCompanyCode,
			cardOwnerName: state.context.cardInfo.cardOwnerName,
			cardNumberFirstSegment: state.context.cardInfo.cardNumberFirstSegment,
			cardNumberSecondSegment: state.context.cardInfo.cardNumberSecondSegment,
			cardNumberThirdSegment: state.context.cardInfo.cardNumberThirdSegment,
			cardNumberFourthSegment: state.context.cardInfo.cardNumberFourthSegment,
			cardExpirationDate: state.context.cardInfo.cardExpirationDate,
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
			styles={styles}
		/>
	);
}
