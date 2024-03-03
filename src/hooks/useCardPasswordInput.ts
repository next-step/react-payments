import { useState, useRef, ChangeEvent } from 'react';

import REGEX from 'src/constants/regex.ts';

export default function useCardPasswordInput() {
	const [firstPassword, setFirstPassword] = useState('');
	const [secondPassword, setSecondPassword] = useState('');

	const secondPasswordInputRef = useRef<HTMLInputElement>(null);

	const handleFirstPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '').slice(0, 1);

		setFirstPassword(formattedValue);

		if (formattedValue.length === 1) {
			secondPasswordInputRef.current?.focus();
		}
	};

	const handleSecondPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSecondPassword(event.target.value.replace(REGEX.EXCLUDE_NUMBER, '').slice(0, 1));
	};

	return {
		firstPassword,
		secondPassword,
		handleFirstPasswordChange,
		handleSecondPasswordChange,
		secondPasswordInputRef,
	};
}
