import { ChangeEvent, useId } from 'react';

import REGEX from 'src/constants/regex.ts';
import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/state/addCardMachine.ts';

interface CardExpirationDateInputProps {
	separator?: string;
}

const formatExpirationDate = (separator: string) => (value: string) => {
	const numericValue = value.replace(REGEX.EXCLUDE_NUMBER, '');

	const month = numericValue.slice(0, 2);
	const year = numericValue.slice(2);

	const formattedMonth = Number(month) > 12 ? month.slice(0, 1) : month;
	const formattedYear = Number(year) > 99 ? year.slice(0, 2) : year;

	return year === '' ? formattedMonth : `${formattedMonth} ${separator} ${formattedYear}`;
};

export default function CardExpirationDateInput({ separator = '/' }: CardExpirationDateInputProps) {
	const { send } = useAddCardMachineActorRef();

	const cardExpirationDate = useAddCardMachineSelector(state => state.context.cardInfo.cardExpirationDate);

	const cardExpirationDateInputId = useId();

	const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: formatExpirationDate(separator)(event.target.value),
			field: 'cardExpirationDate',
		});
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
			/>
		</div>
	);
}
