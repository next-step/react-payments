import { useState, ChangeEvent, useId } from 'react';

import REGEX from 'src/constants/regex.ts';

export default function useCardSecurityCodeInput() {
	const [cardSecurityCode, setCardSecurityCode] = useState('');

	const cardSecurityCodeInputId = useId();

	const handleCardSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCardSecurityCode(event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''));
	};

	return { cardSecurityCode, handleCardSecurityCodeChange, id: cardSecurityCodeInputId };
}
