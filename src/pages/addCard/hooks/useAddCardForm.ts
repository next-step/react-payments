import { useStepper } from '@contexts/StepperContext';
import { useInput } from '@hooks';
import {
	useCardExpiredDateInput,
	useCardNumberInput,
} from '@pages/addCard/hooks';
import { PaymentCardType } from '@types';
import { isNumber } from '@utils';

export default function useAddCardForm() {
	const { dispatch } = useStepper();
	const {
		value: cardNumber,
		displayedValue: displayedCardNumber,
		handleChange: handleCardNumberChange,
	} = useCardNumberInput();

	const {
		value: cardExpiredDate,
		displayedValue: displayedExpiredDate,
		handleChange: handleCardExpiredDateChange,
	} = useCardExpiredDateInput();

	const { value: cardHolderName, handleChange: handleCardHolderNameChange } =
		useInput({});
	const {
		value: cardSecurityCode,
		handleChange: handleCardSecurityCodeChange,
	} = useInput({ validate: isNumber });

	const {
		value: firstCardPassword,
		handleChange: handleFirstCardPasswordChange,
	} = useInput({ validate: isNumber });

	const {
		value: secondCardPassword,
		handleChange: handleSecondCardPasswordChange,
	} = useInput({ validate: isNumber });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const cardPassword = `${firstCardPassword}${secondCardPassword}`;
		const paymentCard: PaymentCardType = {
			cardNumber,
			cardExpiredDate,
			cardHolderName,
			cardPassword,
			cardSecurityCode,
		};
		dispatch({ type: 'toAddCardComplete', payload: paymentCard });
	};
	return {
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
	};
}
