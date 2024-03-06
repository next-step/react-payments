import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import {FIRST_NUMBER, SECOND_NUMBER} from '../../constants/cardNumber';
import {CARD_PASSWORD_LIMIT} from '../../constants/limit';

type CardPasswordType = {
	[FIRST_NUMBER]: string;
	[SECOND_NUMBER]: string;
};

type CardPasswordProps = {
	cardPassword: CardPasswordType;
	setCardPassword: (prevState: CardPasswordType | ((prevState: CardPasswordType) => CardPasswordType)) => void;
};

export default function CardPassword({cardPassword, setCardPassword}: CardPasswordProps) {
	const handleChangeCardPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		updateValidValue({
			limit: CARD_PASSWORD_LIMIT,
			setter(value) {
				setCardPassword(prev => ({
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
			<span className='input-title'>카드 비밀번호</span>
			<Input
				variant='basic'
				className='w-15'
				type='password'
				value={cardPassword[FIRST_NUMBER]}
				name={FIRST_NUMBER}
				onChange={handleChangeCardPassword}
			/>
			<Input
				variant='basic'
				className='w-15'
				type='password'
				value={cardPassword[SECOND_NUMBER]}
				name={SECOND_NUMBER}
				onChange={handleChangeCardPassword}
			/>
			<input className='input-basic input-disabled w-15' type='password' value='*' disabled />
			<input className='input-basic input-disabled w-15' type='password' value='*' disabled />
		</div>
	);
}
