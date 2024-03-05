import useCardExpirationDateInput from 'src/hooks/useCardExpirationDateInput';

interface CardExpirationDateInputProps extends ReturnType<typeof useCardExpirationDateInput> {
	id?: string;
}

export default function CardExpirationDateInput({
	id,
	expirationDate,
	handleExpirationDateChange,
}: CardExpirationDateInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={id}>
				만료일
			</label>
			<input
				placeholder="MM / YY"
				className="input-basic"
				id={id}
				value={expirationDate}
				onChange={handleExpirationDateChange}
				data-testid="card-expiration-date"
			/>
		</div>
	);
}
