import { useDisplayedInput } from '@hooks';
import { insertAtInterval, isNumber } from '@utils';
import { useCallback } from 'react';

const EXPIRED_DATE_LENGTH = 4;
const EXPIRED_MONTH_LENGTH = 2;

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
