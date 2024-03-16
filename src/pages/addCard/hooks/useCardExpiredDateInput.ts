import { EXPIRED_DATE_LENGTH, EXPIRED_MONTH_LENGTH } from '@constants';
import { useDisplayedInput } from '@hooks';
import { insertAtInterval, isNumber } from '@utils';
import { useCallback } from 'react';

export default function useCardExpiredDateInput() {
	const toDisplayed = useCallback(
		(value: string) => insertAtInterval(value, '/', EXPIRED_MONTH_LENGTH),
		[],
	);

	const { value, displayedValue, handleChange } = useDisplayedInput({
		toDisplayed,
		maxLength: EXPIRED_DATE_LENGTH,
		validate: isNumber,
	});

	return { value, displayedValue, handleChange };
}
