import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import {
	FIRST_NUMBER, FOURTH_NUMBER, SECOND_NUMBER, THIRD_NUMBER,
} from '../../constants/cardNumber';
import {CARD_NUMBER_LIMIT} from '../../constants/limit';

type CardNumberType = {
	[FIRST_NUMBER]: string;
	[SECOND_NUMBER]: string;
	[THIRD_NUMBER]: string;
	[FOURTH_NUMBER]: string;
};

type CardNumberProps = {
	cardNumber: CardNumberType;
	setCardNumber: (prevState: CardNumberType | ((prevState: CardNumberType) => CardNumberType)) => void;
};

export default function CardNumber({cardNumber, setCardNumber}: CardNumberProps) {
	const handleChangeCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		updateValidValue({
			limit: CARD_NUMBER_LIMIT,
			setter(value) {
				setCardNumber(prev => ({
					...prev,
					[name]: value,
				}));
			},
			value,
			isMonth: false,
			isNumber: true,
		});
	};

	return (
		<div className='input-container'>
			<span className='input-title'>카드 번호</span>
			<div className='input-box'>
				<Input
					variant='basic'
					type='text'
					value={cardNumber[FIRST_NUMBER]}
					name={FIRST_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='text'
					value={cardNumber[SECOND_NUMBER]}
					name={SECOND_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='password'
					value={cardNumber[THIRD_NUMBER]}
					name={THIRD_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='password'
					value={cardNumber[FOURTH_NUMBER]}
					name={FOURTH_NUMBER}
					onChange={handleChangeCardNumber}
				/>
			</div>
		</div>
	);
}
