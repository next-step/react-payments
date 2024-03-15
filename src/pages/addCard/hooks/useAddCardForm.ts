import { useNavigate } from 'react-router-dom';
import {
	useCardExpiredDateInput,
	useCardNumberInput,
} from '@pages/addCard/hooks';
import { useInput } from '@hooks';
import { isNumber } from '@utils';
import { useStepper } from '@contexts/StepperContext';

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
		dispatch({ type: 'toAddCardComplete' });
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
