import useCardSecurityCodeInput from 'src/hooks/useCardSecurityCodeInput.ts';

interface CardSecurityCodeInputProps extends ReturnType<typeof useCardSecurityCodeInput> {}

export default function CardSecurityCodeInput({
	id,
	cardSecurityCode,
	handleCardSecurityCodeChange,
}: CardSecurityCodeInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={id}>
				보안코드(CVC/CVV)
			</label>
			<input
				type="password"
				className="input-basic w-50"
				value={cardSecurityCode}
				onChange={handleCardSecurityCodeChange}
				id={id}
				data-testid="card-security-code"
			/>
		</div>
	);
}
