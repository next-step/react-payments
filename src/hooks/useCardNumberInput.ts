import { useState, ChangeEvent, useCallback } from 'react';

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

	const formatCardNumber = useCallback(
		(value: string) => {
			const numericValue = value.replace(/\D/g, '');

			const segments = Array.from({ length: Math.ceil(numericValue.length / segmentLength) }, (_, index) =>
				numericValue.slice(index * segmentLength, (index + 1) * segmentLength),
			);

			return segments.join(separator);
		},
		[separator, segmentLength],
	);

	const handleCardNumberChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setCardNumber(formatCardNumber(event.target.value));
		},
		[formatCardNumber],
	);

	return { cardNumber, handleCardNumberChange, maxLength: segmentLength * segmentNumber + segmentNumber - 1 };
}
