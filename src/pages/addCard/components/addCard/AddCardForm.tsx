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

export default function AddCardForm() {
	const {
		displayedCardNumber,
		displayedExpiredDate,
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

	return (
		<form onSubmit={handleSubmit}>
			<PaymentCard
				variant="small-card"
				cardNumber={displayedCardNumber}
				cardExpiredDate={displayedExpiredDate}
				cardHolderName={cardHolderName}
			/>
			<CardNumberInput
				value={displayedCardNumber}
				onChange={handleCardNumberChange}
			/>
			<CardExpiredDateInput
				value={displayedExpiredDate}
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
