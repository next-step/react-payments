import { useState, ChangeEvent } from 'react';

import REGEX from 'src/constants/regex.ts';

interface UseExpirationDateInputOptions {
	separator: string;
}

export default function useExpirationDateInput(options: UseExpirationDateInputOptions = { separator: '/' }) {
	const { separator } = options;

	const [expirationDate, setExpirationDate] = useState('');

	const formatExpirationDate = (value: string) => {
		const numericValue = value.replace(REGEX.EXCLUDE_NUMBER, '');

		const month = numericValue.slice(0, 2);
		const year = numericValue.slice(2);

		const formattedMonth = Number(month) > 12 ? month.slice(0, 1) : month;
		const formattedYear = Number(year) > 99 ? year.slice(0, 2) : year;

		return year === '' ? formattedMonth : `${formattedMonth} ${separator} ${formattedYear}`;
	};

	const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setExpirationDate(formatExpirationDate(event.target.value));
	};

	return { expirationDate, handleExpirationDateChange };
}
