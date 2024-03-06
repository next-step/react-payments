import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import type ExpirationDateType from '../../types/ExpirationDateType';

import {MONTH, YEAR} from '../../constants/expirationDate';
import {EXPIRATION_DATE_LIMIT} from '../../constants/limit';
import {EXPIRATION_DATE_MONTH_PLACEHOLDER, EXPIRATION_DATE_YEAR_PLACEHOLDER} from '../../constants/placeHolder';

type ExpirationDateProps = {
	expirationDate: ExpirationDateType;
	setExpirationDate: (prevState: ExpirationDateType | ((prevState: ExpirationDateType) => ExpirationDateType)) => void;
};

export default function ExpirationDate({expirationDate, setExpirationDate}: ExpirationDateProps) {
	const handleChangeExpirationDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		updateValidValue(
			EXPIRATION_DATE_LIMIT,
			value => {
				setExpirationDate(prev => ({
					...prev,
					[name]: value,
				}));
			},
			value,
			name === MONTH,
			true,
		);
	};

	return (
		<div className='input-container'>
			<span className='input-title'>만료일</span>
			<div className='input-box w-50'>
				<Input
					variant='basic'
					type='text'
					placeholder={EXPIRATION_DATE_MONTH_PLACEHOLDER}
					value={expirationDate[MONTH]}
					name={MONTH}
					onChange={handleChangeExpirationDate}
				/>
				<Input
					variant='basic'
					type='text'
					placeholder={EXPIRATION_DATE_YEAR_PLACEHOLDER}
					value={expirationDate[YEAR]}
					name={YEAR}
					onChange={handleChangeExpirationDate}
				/>
			</div>
		</div>
	);
}
