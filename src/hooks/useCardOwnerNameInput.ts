import { useState, ChangeEvent } from 'react';

interface UseCardOwnerNameInputOptions {
	maxLength: number;
}

export default function useCardOwnerNameInput(options: UseCardOwnerNameInputOptions = { maxLength: 30 }) {
	const { maxLength } = options;

	const [cardOwnerName, setCardOwnerName] = useState('');

	const handleCardOwnerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCardOwnerName(event.target.value.slice(0, maxLength));
	};

	return { cardOwnerName, handleCardOwnerNameChange, maxLength };
}
