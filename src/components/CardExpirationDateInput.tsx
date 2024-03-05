import useCardExpirationDateInput from 'src/hooks/useCardExpirationDateInput';

interface CardExpirationDateInputProps extends ReturnType<typeof useCardExpirationDateInput> {}

export default function CardExpirationDateInput({
	id = 'card-expiration-date',
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
