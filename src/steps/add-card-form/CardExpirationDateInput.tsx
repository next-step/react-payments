import { ChangeEvent, useId } from 'react';

import REGEX from 'src/constants/regex';
import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';

interface CardExpirationDateInputProps {
	separator?: string;
	maxLength?: number;
}

const formatExpirationDate = (separator: string) => (value: string) => {
	const numericValue = value.replace(REGEX.EXCLUDE_NUMBER, '');

	const month = numericValue.slice(0, 2);
	const year = numericValue.slice(2);

	const formattedMonth = Number(month) > 12 ? month.slice(0, 1) : month;
	const formattedYear = Number(year) > 99 ? year.slice(0, 2) : year;

	return year === '' ? formattedMonth : `${formattedMonth} ${separator} ${formattedYear}`;
};

export default function CardExpirationDateInput({ separator = '/', maxLength }: CardExpirationDateInputProps) {
	const { send } = useAddCardMachineActorRef();

	const cardExpirationDate = useAddCardMachineSelector(state => state.context.cardInfo.cardExpirationDate);

	const cardExpirationDateInputId = useId();

	const { ref: cardExpirationDateInputRef, focusNextInput } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_EXPIRATION_DATE,
	);

	const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = formatExpirationDate(separator)(event.target.value);

		send({
			type: 'CHANGE_FIELD',
			value: formattedValue,
			field: 'cardExpirationDate',
		});

		if (formattedValue.length === maxLength) {
			focusNextInput();
		}
	};

	return (
		<div className="input-container">
			<label className="input-title" htmlFor={cardExpirationDateInputId}>
				만료일
			</label>
			<input
				placeholder="MM / YY"
				className="input-basic"
				id={cardExpirationDateInputId}
				value={cardExpirationDate}
				onChange={handleExpirationDateChange}
				data-testid="card-expiration-date"
				maxLength={maxLength}
				ref={cardExpirationDateInputRef}
			/>
		</div>
	);
}
