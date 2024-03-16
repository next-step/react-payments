import { EXPIRED_DATE_LENGTH } from '@constants';
import { useDisplayedCard, useDisplayedInput } from '@hooks';
import { isNumber } from '@utils';

export default function useCardExpiredDateInput() {
	const { toDisplayedCardExpiredDate } = useDisplayedCard();

	const { value, displayedValue, handleChange } = useDisplayedInput({
		toDisplayed: toDisplayedCardExpiredDate,
		maxLength: EXPIRED_DATE_LENGTH,
		validate: isNumber,
	});

	return { value, displayedValue, handleChange };
}
