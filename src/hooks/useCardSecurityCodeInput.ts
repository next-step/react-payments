import { useState, ChangeEvent } from 'react';

export default function useCardSecurityCodeInput() {
	const [cardSecurityCode, setCardSecurityCode] = useState('');

	const handleCardSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCardSecurityCode(event.target.value.replace(/\D/g, ''));
	};

	return { cardSecurityCode, handleCardSecurityCodeChange };
}
