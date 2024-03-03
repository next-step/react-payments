import React from 'react';

import CardImage from 'src/components/CardImage.tsx';
import CardNumberInput from 'src/components/CardNumberInput.tsx';
import CardOwnerNameInput from 'src/components/CardOwnerNameInput.tsx';
import CardExpirationDateInput from 'src/components/CardExpirationDateInput.tsx';
import CardSecurityCodeInput from 'src/components/CardSecurityCodeInput.tsx';
import CardPasswordInput from 'src/components/CardPasswordInput.tsx';
import Heading from 'src/components/Heading.tsx';
import Button from 'src/components/Button.tsx';

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
		<div>
			<div className="header-box">
				<Button type="button" onClick={onClickBack}>
					<img src="/back.png" alt="뒤로가기" />
				</Button>
				<Heading.H2 className="page-title">카드 추가</Heading.H2>
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
					<Button type="submit">다음</Button>
				</div>
			</form>
		</div>
	);
}
