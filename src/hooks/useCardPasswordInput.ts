import { useState, useRef, ChangeEvent } from 'react';

import REGEX from 'src/constants/regex.ts';

interface UseCardPasswordInputOptions {
	segmentMaxLength: number;
}

export default function useCardPasswordInput(options: UseCardPasswordInputOptions = { segmentMaxLength: 1 }) {
	const { segmentMaxLength } = options;

	const [firstPassword, setFirstPassword] = useState('');
	const [secondPassword, setSecondPassword] = useState('');

	const secondPasswordInputRef = useRef<HTMLInputElement>(null);

	const handleFirstPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		setFirstPassword(formattedValue);

		if (formattedValue.length === segmentMaxLength) {
			secondPasswordInputRef.current?.focus();
		}
	};

	const handleSecondPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSecondPassword(event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''));
	};

	return {
		firstPassword,
		secondPassword,
		handleFirstPasswordChange,
		handleSecondPasswordChange,
		secondPasswordInputRef,
		segmentMaxLength,
	};
}
