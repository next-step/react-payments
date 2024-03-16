import { useInput, useStepper } from '@hooks';
import {
	useCardExpiredDateInput,
	useCardNumberInput,
} from '@pages/addCard/hooks';
import { PaymentCardType } from '@types';
import { isNumber } from '@utils';
import { v4 as uuid } from 'uuid';

export default function useAddCardForm() {
	const { dispatch } = useStepper();
	const { value: cardNumber, handleChange: handleCardNumberChange } =
		useCardNumberInput();

	const { value: cardExpiredDate, handleChange: handleCardExpiredDateChange } =
		useCardExpiredDateInput();

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
			id: uuid(),
			cardNumber,
			cardExpiredDate,
			cardHolderName,
			cardPassword,
			cardSecurityCode,
			createdAt: new Date(),
			cardAlias: '',
		};
		dispatch({ type: 'toAddCardComplete', payload: paymentCard });
	};
	return {
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
	};
}
