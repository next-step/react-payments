import { FormEvent, useId } from 'react';

import CardImage from 'src/components/CardImage.tsx';
import CardNumberInput from 'src/components/CardNumberInput.tsx';
import CardOwnerNameInput from 'src/components/CardOwnerNameInput.tsx';
import CardExpirationDateInput from 'src/components/CardExpirationDateInput.tsx';
import CardSecurityCodeInput from 'src/components/CardSecurityCodeInput.tsx';
import CardPasswordInput from 'src/components/CardPasswordInput.tsx';

import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';
import useCardOwnerNameInput from 'src/hooks/useCardOwnerNameInput.ts';
import useCardExpirationDateInput from 'src/hooks/useCardExpirationDateInput.ts';
import useCardSecurityCodeInput from 'src/hooks/useCardSecurityCodeInput.ts';
import useCardPasswordInput from 'src/hooks/useCardPasswordInput.ts';

interface AddCardFormProps {
	onSubmit?: (
		cardNumber: string,
		cardOwnerName: string,
		expirationDate: string,
		securityCode: string,
		password: string,
	) => void;
	onClickBack?: () => void;
}

export default function AddCardForm({ onSubmit, onClickBack }: AddCardFormProps) {
	const cardNumberInput = useCardNumberInput();
	const cardOwnerNameInput = useCardOwnerNameInput();
	const cardExpirationDateInput = useCardExpirationDateInput();
	const cardSecurityCodeInput = useCardSecurityCodeInput();
	const cardPasswordInput = useCardPasswordInput();

	const cardNumberInputId = useId();
	const cardOwnerNameInputId = useId();
	const cardExpirationDateInputId = useId();
	const cardSecurityCodeInputId = useId();
	const cardPasswordInputId = useId();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (onSubmit) {
			onSubmit(
				`${cardNumberInput.firstSegment}-${cardNumberInput.secondSegment}-${cardNumberInput.thirdSegment}-${cardNumberInput.fourthSegment}`,
				cardOwnerNameInput.cardOwnerName,
				cardExpirationDateInput.expirationDate,
				cardSecurityCodeInput.cardSecurityCode,
				`${cardPasswordInput.firstPassword}${cardPasswordInput.secondPassword}`,
			);
		}
	};

	return (
		<div>
			<div className="header-box">
				<button type="button" onClick={onClickBack}>
					<img src="/back.png" alt="뒤로가기" />
				</button>
				<h2 className="page-title">카드 추가</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<CardImage
					firstSegment={cardNumberInput.firstSegment}
					secondSegment={cardNumberInput.secondSegment}
					thirdSegment={cardNumberInput.thirdSegment}
					fourthSegment={cardNumberInput.fourthSegment}
					expirationDate={cardExpirationDateInput.expirationDate}
					cardOwnerName={cardOwnerNameInput.cardOwnerName}
				/>
				<CardNumberInput {...cardNumberInput} id={cardNumberInputId} />
				<CardOwnerNameInput
					value={cardOwnerNameInput.cardOwnerName}
					onChange={cardOwnerNameInput.handleCardOwnerNameChange}
					maxLength={cardOwnerNameInput.maxLength}
					id={cardOwnerNameInputId}
				/>
				<CardExpirationDateInput
					value={cardExpirationDateInput.expirationDate}
					onChange={cardExpirationDateInput.handleExpirationDateChange}
					id={cardExpirationDateInputId}
				/>
				<CardSecurityCodeInput
					value={cardSecurityCodeInput.cardSecurityCode}
					onChange={cardSecurityCodeInput.handleCardSecurityCodeChange}
					id={cardSecurityCodeInputId}
				/>
				<CardPasswordInput {...cardPasswordInput} id={cardPasswordInputId} />
				<div className="button-box">
					<button type="submit" className="button-text">
						다음
					</button>
				</div>
			</form>
		</div>
	);
}
