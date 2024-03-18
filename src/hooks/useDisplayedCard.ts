import {
	CARD_NUMBER_HYPHEN_INTERVAL,
	CARD_NUMBER_NOT_MASKED_LENGTH,
	EXPIRED_MONTH_LENGTH,
} from '@constants';
import { insertAtInterval, replaceTo } from '@utils';
import { useCallback } from 'react';

export default function useDisplayedCard() {
	const toDisplayedCardNumber = useCallback((value: string) => {
		const masked = replaceTo(
			value,
			'*',
			CARD_NUMBER_NOT_MASKED_LENGTH,
			value.length,
		);
		return insertAtInterval(masked, '-', CARD_NUMBER_HYPHEN_INTERVAL);
	}, []);
	const toDisplayedCardExpiredDate = useCallback(
		(value: string) => insertAtInterval(value, '/', EXPIRED_MONTH_LENGTH),
		[],
	);
	return { toDisplayedCardNumber, toDisplayedCardExpiredDate };
}
