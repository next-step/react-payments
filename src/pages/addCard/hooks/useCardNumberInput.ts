import { CARN_NUMBER_LENGTH } from '@constants';
import { useDisplayedCard, useDisplayedInput } from '@hooks';
import { isNumber } from '@utils';

export default function useCardNumberInput() {
	const { toDisplayedCardNumber } = useDisplayedCard();

	const { value, displayedValue, handleChange } = useDisplayedInput({
		toDisplayed: toDisplayedCardNumber,
		maxLength: CARN_NUMBER_LENGTH,
		validate: isNumber,
	});

	return { value, displayedValue, handleChange };
}
