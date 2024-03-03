import React from 'react';

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
}

export default function AddCardForm({ onSubmit }: AddCardFormProps) {
	const cardNumberInput = useCardNumberInput();
	const cardOwnerNameInput = useCardOwnerNameInput();
	const cardExpirationDateInput = useCardExpirationDateInput();
	const cardSecurityCodeInput = useCardSecurityCodeInput();
	const cardPasswordInput = useCardPasswordInput();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
		<form onSubmit={handleSubmit}>
			<CardImage
				firstSegment={cardNumberInput.firstSegment}
				secondSegment={cardNumberInput.secondSegment}
				thirdSegment={cardNumberInput.thirdSegment}
				fourthSegment={cardNumberInput.fourthSegment}
				expirationDate={cardExpirationDateInput.expirationDate}
				cardOwnerName={cardOwnerNameInput.cardOwnerName}
			/>
			<CardNumberInput {...cardNumberInput} />
			<CardOwnerNameInput
				value={cardOwnerNameInput.cardOwnerName}
				onChange={cardOwnerNameInput.handleCardOwnerNameChange}
				maxLength={cardOwnerNameInput.maxLength}
			/>
			<CardExpirationDateInput
				value={cardExpirationDateInput.expirationDate}
				onChange={cardExpirationDateInput.handleExpirationDateChange}
			/>
			<CardSecurityCodeInput
				value={cardSecurityCodeInput.cardSecurityCode}
				onChange={cardSecurityCodeInput.handleCardSecurityCodeChange}
			/>
			<CardPasswordInput {...cardPasswordInput} />
			<div className="button-box">
				<button type="submit" className="button-text">
					다음
				</button>
			</div>
		</form>
	);
}
