import { useState, ChangeEvent } from 'react';

import REGEX from 'src/constants/regex.ts';

interface UseCardNumberInputOptions {
	segmentLength: number;
	segmentNumber: number;
	separator: string;
}

export default function useCardNumberInput(
	options: UseCardNumberInputOptions = {
		segmentLength: 4,
		segmentNumber: 4,
		separator: '-',
	},
) {
	const { separator, segmentLength, segmentNumber } = options;

	const [cardNumber, setCardNumber] = useState('');

	const formatCardNumber = (value: string) => {
		const numericValue = value.replace(REGEX.EXCLUDE_NUMBER, '');

		const segments = Array.from({ length: Math.ceil(numericValue.length / segmentLength) }, (_, index) =>
			numericValue.slice(index * segmentLength, (index + 1) * segmentLength),
		);

		return segments.join(separator);
	};

	const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCardNumber(formatCardNumber(event.target.value));
	};

	return { cardNumber, handleCardNumberChange, maxLength: segmentLength * segmentNumber + segmentNumber - 1 };
}
