import {
	FIRST_NUMBER, FOURTH_NUMBER, SECOND_NUMBER, THIRD_NUMBER,
} from '../../constants/cardNumber';

import Input from '../Input';

import type CardNumberType from '../../types/CardNumberType';

type CardNumberProps = {
	cardNumber: CardNumberType;
	handleChangeCardNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardNumber({cardNumber, handleChangeCardNumber}: CardNumberProps) {
	return (
		<div className='input-container'>
			<span className='input-title'>카드 번호</span>
			<div className='input-box'>
				<Input
					variant='basic'
					type='text'
					value={cardNumber.first_number}
					name={FIRST_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='text'
					value={cardNumber.second_number}
					name={SECOND_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='password'
					value={cardNumber.third_number}
					name={THIRD_NUMBER}
					onChange={handleChangeCardNumber}
				/>
				<Input
					variant='basic'
					type='password'
					value={cardNumber.fourth_number}
					name={FOURTH_NUMBER}
					onChange={handleChangeCardNumber}
				/>
			</div>
		</div>
	);
}
