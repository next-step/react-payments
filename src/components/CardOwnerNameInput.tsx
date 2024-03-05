import useCardOwnerNameInput from 'src/hooks/useCardOwnerNameInput.ts';

interface CardSecurityCodeInputProps extends ReturnType<typeof useCardOwnerNameInput> {
	id?: string;
}

export default function CardOwnerNameInput({
	cardOwnerName,
	handleCardOwnerNameChange,
	id,
	maxLength,
}: CardSecurityCodeInputProps) {
	return (
		<div className="input-container">
			<label className="input-label-box" htmlFor={id}>
				<div className="input-title">카드 소유자 이름(선택)</div>
				<div className="input-title">{`${cardOwnerName.length} / ${maxLength}`}</div>
			</label>
			<input
				placeholder="카드에 표시된 이름과 동일하게 입력하세요."
				className="input-basic"
				value={cardOwnerName}
				onChange={handleCardOwnerNameChange}
				id={id}
				data-testid="card-owner-name"
				maxLength={maxLength}
			/>
		</div>
	);
}
