import {useState} from 'react';

import {Link} from 'react-router-dom';

import Input from '../Input';

import setNumber from '../../utils/setNumber';

import {
	CARD_NUMBER_LIMIT,
	EXPIRATION_DATE_LIMIT,
	SECURITY_CODE_LIMIT,
	CARD_PASSWORD_LIMIT,
} from '../../constants/limit';
import {
	FIRST_NUMBER, SECOND_NUMBER, THIRD_NUMBER, FOURTH_NUMBER,
} from '../../constants/cardNumber';
import {MONTH, YEAR} from '../../constants/expirationDate';
import {
	EXPIRATIONDATE_MONTH_PLACEHOLDER,
	EXPIRATIONDATE_YEAR_PLACEHOLDER,
} from '../../constants/placeHolder';
import {OWNERNAME_DEFAULT} from '../../constants/default';
import {HYPHEN, SLASH} from '../../constants/specialCharacter';

import CardNumber from './CardNumber';
import ExpirationDate from './ExpirationDate';
import OwnerName from './OwnerName';

export default function Card() {
	const [cardNumber, setCardNumber] = useState({
		[FIRST_NUMBER]: '',
		[SECOND_NUMBER]: '',
		[THIRD_NUMBER]: '',
		[FOURTH_NUMBER]: '',
	});

	const [expirationDate, setExpirationDate] = useState({
		[MONTH]: '',
		[YEAR]: '',
	});

	const [ownerName, setOwnerName] = useState('');

	const [securityCode, setSecurityCode] = useState('');

	const [cardPassword, setCardPassword] = useState({
		[FIRST_NUMBER]: '',
		[SECOND_NUMBER]: '',
	});

	const handleChangeSecurityCode = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;

		setNumber(
			SECURITY_CODE_LIMIT,
			setSecurityCode,
			value,
			false,
			true,
		);
	};

	const handleChangeCardPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setNumber(
			CARD_PASSWORD_LIMIT,
			value => {
				setCardPassword(prev => ({
					...prev,
					[name]: value,
				}));
			},
			value,
			false,
			true,
		);
	};

	const specialCharacter = (
		value: string,
		limit: number,
		specialCharacter: string,
	) => value.length === limit ? specialCharacter : '';

	return (
		<div>
			<div className='root'>
				<div className='app'>
					<h2 className='page-title'>
						<Link to='/' className='button-basic'>{'<'}</Link>
						<span className='ml-10'>카드 추가</span>
					</h2>
					<div className='card-box'>
						<div className='empty-card'>
							<div className='card-top'>
								<span className='card-text'>클린카드</span>
							</div>
							<div className='card-middle'>
								<div className='small-card__chip'></div>
							</div>
							<div className='card-bottom'>
								<div className='card-bottom__number'>
									<span className='card-text'>
										{cardNumber[FIRST_NUMBER]
										+ specialCharacter(cardNumber[FIRST_NUMBER], CARD_NUMBER_LIMIT, HYPHEN)}
										{cardNumber[SECOND_NUMBER]
										+ specialCharacter(cardNumber[SECOND_NUMBER], CARD_NUMBER_LIMIT, HYPHEN)}
										{cardNumber[THIRD_NUMBER]
										+ specialCharacter(cardNumber[THIRD_NUMBER], CARD_NUMBER_LIMIT, HYPHEN)}
										{cardNumber[FOURTH_NUMBER]}
									</span>

								</div>
								<div className='card-bottom__info'>
									<span className='card-text'>{ownerName || OWNERNAME_DEFAULT}</span>
									<span className='card-text'>
										{
											expirationDate[MONTH] || expirationDate[YEAR]
												? `${expirationDate[MONTH]} 
												   ${specialCharacter(expirationDate[MONTH], EXPIRATION_DATE_LIMIT, SLASH)}
												   ${expirationDate[YEAR]}`
												: `${EXPIRATIONDATE_MONTH_PLACEHOLDER} ${SLASH} ${EXPIRATIONDATE_YEAR_PLACEHOLDER}`
										}
									</span>
								</div>
							</div>
						</div>
					</div>
					<CardNumber
						cardNumber={cardNumber}
						setCardNumber={setCardNumber}
					/>
					<ExpirationDate
						expirationDate={expirationDate}
						setExpirationDate={setExpirationDate}
					/>
					<OwnerName
						ownerName={ownerName}
						setOwnerName={setOwnerName}
					/>
					<div className='input-container'>
						<span className='input-title'>보안코드(CVC/CVV)</span>
						<Input
							variant='basic'
							className='w-25'
							type='password'
							value={securityCode}
							onChange={handleChangeSecurityCode}
						/>
					</div>
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
					<div className='button-box'>
						<span className='button-text'>
							<Link to='/add/complete' className='button-basic'>다음</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
