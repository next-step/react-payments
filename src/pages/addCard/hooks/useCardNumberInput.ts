import {
	CARD_NUMBER_HYPHEN_INTERVAL,
	CARD_NUMBER_NOT_MASKED_LENGTH,
	CARN_NUMBER_LENGTH,
} from '@constants';
import { useDisplayedInput } from '@hooks';
import { insertAtInterval, isNumber, replaceTo } from '@utils';
import { useCallback } from 'react';

export default function useCardNumberInput() {
	const toMaskedCardNumber = useCallback((value: string) => {
		const masked = replaceTo(
			value,
			'*',
			CARD_NUMBER_NOT_MASKED_LENGTH,
			value.length,
		);
		return insertAtInterval(masked, '-', CARD_NUMBER_HYPHEN_INTERVAL);
	}, []);

	const { value, displayedValue, handleChange } = useDisplayedInput({
		toDisplayed: toMaskedCardNumber,
		maxLength: CARN_NUMBER_LENGTH,
		validate: isNumber,
	});

	return { value, displayedValue, handleChange };
}
