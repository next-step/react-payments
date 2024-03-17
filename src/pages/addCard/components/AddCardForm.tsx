import { useAddCardForm } from '@pages/addCard/hooks';
import {
	CardNumberInput,
	CardExpiredDateInput,
	CardHolderNameInput,
	CardSecurityCodeInput,
	CardPasswordInput,
} from '@pages/addCard/components';
import { Button } from '@components/ui-kit';
import { PaymentCard } from '@components/domain';
import { useDisplayedCard } from '@hooks';
import { useMemo } from 'react';

export default function AddCardForm() {
	const {
		cardNumber,
		cardExpiredDate,
		cardHolderName,
		cardSecurityCode,
		firstCardPassword,
		secondCardPassword,
		handleCardNumberChange,
		handleCardExpiredDateChange,
		handleCardHolderNameChange,
		handleCardSecurityCodeChange,
		handleFirstCardPasswordChange,
		handleSecondCardPasswordChange,
		handleSubmit,
	} = useAddCardForm();

	const { toDisplayedCardExpiredDate, toDisplayedCardNumber } =
		useDisplayedCard();
	const displayedCardNumber = useMemo(
		() => toDisplayedCardNumber(cardNumber),
		[cardNumber, toDisplayedCardNumber],
	);
	const displayedCardExpiredDate = useMemo(
		() => toDisplayedCardExpiredDate(cardExpiredDate),
		[cardExpiredDate, toDisplayedCardExpiredDate],
	);

	return (
		<form onSubmit={handleSubmit}>
			<PaymentCard
				variant="small-card"
				cardNumber={cardNumber}
				cardExpiredDate={cardExpiredDate}
				cardHolderName={cardHolderName}
			/>
			<CardNumberInput
				value={displayedCardNumber}
				onChange={handleCardNumberChange}
			/>
			<CardExpiredDateInput
				value={displayedCardExpiredDate}
				onChange={handleCardExpiredDateChange}
			/>
			<CardHolderNameInput
				value={cardHolderName}
				onChange={handleCardHolderNameChange}
			/>
			<CardSecurityCodeInput
				value={cardSecurityCode}
				onChange={handleCardSecurityCodeChange}
			/>
			<CardPasswordInput
				firstValue={firstCardPassword}
				secondValue={secondCardPassword}
				onFirstValueChange={handleFirstCardPasswordChange}
				onSecondValueChange={handleSecondCardPasswordChange}
			/>
			<div className="bottom-button-box">
				<Button type="submit">다음</Button>
			</div>
		</form>
	);
}
