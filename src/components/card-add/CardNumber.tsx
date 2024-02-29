import Input from '../Input';

import setNumber from '../../utils/setNumber';

import type CardNumberType from '../../types/CardNumberType';

import {
	FIRST_NUMBER, FOURTH_NUMBER, SECOND_NUMBER, THIRD_NUMBER,
} from '../../constants/cardNumber';
import {CARD_NUMBER_LIMIT} from '../../constants/limit';

type CardNumberProps = {
	cardNumber: CardNumberType;
	setCardNumber: (prevState: CardNumberType | ((prevState: CardNumberType) => CardNumberType)) => void;
};

export default function CardNumber({cardNumber, setCardNumber}: CardNumberProps) {
	const handleChangeCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setNumber(
			CARD_NUMBER_LIMIT,
			value => {
				setCardNumber(prev => ({
					...prev,
					[name]: value,
				}));
			},
			value,
			false,
			true,
		);
	};

	return (
		<div className='input-container'>
			<span className='input-title'>카드 번호</span>
			<div className='input-box'>
				<Input
					variant='basic'
					type='text'
					value={cardNumber.firstNumber}
					name={FIRST_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='text'
					value={cardNumber.secondNumber}
					name={SECOND_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='password'
					value={cardNumber.thirdNumber}
					name={THIRD_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='password'
					value={cardNumber.fourthNumber}
					name={FOURTH_NUMBER}
					onChange={handleChangeCardNumber}
				/>
			</div>
		</div>
	);
}
