import {useState} from 'react';

import Input from './components/Input';

import setNumber from './utils/setNumber';

import {
	CARDNUMBER_LIMIT,
	EXPIRATIONDATE_LIMIT,
	OWNERNAME_LIMIT,
	SECURITYCODE_LIMIT,
	CARDPASSWORD_LIMIT,
} from './fixtures/limit';
import {
	FIRST_NUMBER, SECOND_NUMBER, THIRD_NUMBER, FOURTH_NUMBER,
} from './fixtures/cardNumber';
import {MONTH, YEAR} from './fixtures/expirationDate';
import {
	EXPIRATIONDATE_MONTH_PLACEHOLDER,
	EXPIRATIONDATE_YEAR_PLACEHOLDER,
	OWNERNAME_PLACEHOLDER,
} from './fixtures/placeHolder';

export default function App() {
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

	const handleChangeCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setNumber(
			CARDNUMBER_LIMIT,
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

	const handleChangeExpirationDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setNumber(
			EXPIRATIONDATE_LIMIT,
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

	const handleChangeOwnerName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;

		setNumber(
			OWNERNAME_LIMIT,
			setOwnerName,
			value,
			false,
			false,
		);
	};

	const handleChangeSecurityCode = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;

		setNumber(
			SECURITYCODE_LIMIT,
			setSecurityCode,
			value,
			false,
			true,
		);
	};

	const handleChangeCardPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setNumber(
			CARDPASSWORD_LIMIT,
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
					<h2 className='page-title'>카드 추가</h2>
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
										+ specialCharacter(cardNumber[FIRST_NUMBER], CARDNUMBER_LIMIT, '-')}
										{cardNumber[SECOND_NUMBER]
										+ specialCharacter(cardNumber[SECOND_NUMBER], CARDNUMBER_LIMIT, '-')}
										{cardNumber[THIRD_NUMBER]
										+ specialCharacter(cardNumber[THIRD_NUMBER], CARDNUMBER_LIMIT, '-')}
										{cardNumber[FOURTH_NUMBER]}
									</span>

								</div>
								<div className='card-bottom__info'>
									<span className='card-text'>{ownerName || 'NAME'}</span>
									<span className='card-text'>
										{
											expirationDate[MONTH] || expirationDate[YEAR]
												? `${expirationDate[MONTH]} 
												   ${specialCharacter(expirationDate[MONTH], EXPIRATIONDATE_LIMIT, '/')}
												   ${expirationDate[YEAR]}`
												: `${EXPIRATIONDATE_MONTH_PLACEHOLDER} / ${EXPIRATIONDATE_YEAR_PLACEHOLDER}`
										}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='input-container'>
						<span className='input-title'>카드 번호</span>
						<div className='input-box'>
							<Input
								className='input-basic'
								type='text'
								value={cardNumber[FIRST_NUMBER]}
								name={FIRST_NUMBER}
								onChange={handleChangeCardNumber}
							/>
							<Input
								className='input-basic'
								type='text'
								value={cardNumber[SECOND_NUMBER]}
								name={SECOND_NUMBER}
								onChange={handleChangeCardNumber}
							/>
							<Input
								className='input-basic'
								type='password'
								value={cardNumber[THIRD_NUMBER]}
								name={THIRD_NUMBER}
								onChange={handleChangeCardNumber}
							/>
							<Input
								className='input-basic'
								type='password'
								value={cardNumber[FOURTH_NUMBER]}
								name={FOURTH_NUMBER}
								onChange={handleChangeCardNumber}
							/>
						</div>
					</div>
					<div className='input-container'>
						<span className='input-title'>만료일</span>
						<div className='input-box w-50'>
							<Input
								className='input-basic'
								type='text'
								placeholder={EXPIRATIONDATE_MONTH_PLACEHOLDER}
								value={expirationDate[MONTH]}
								name={MONTH}
								onChange={handleChangeExpirationDate}
							/>
							<Input
								className='input-basic'
								type='text'
								placeholder={EXPIRATIONDATE_YEAR_PLACEHOLDER}
								value={expirationDate[YEAR]}
								name={YEAR}
								onChange={handleChangeExpirationDate}
							/>
						</div>
					</div>
					<div className='input-container'>
						<div className='input-group'>
							<span className='input-title'>카드 소유자 이름(선택)</span>
							<span className='input-title'>{ownerName.length} / {OWNERNAME_LIMIT}</span>
						</div>
						<Input
							className='input-basic'
							type='text'
							placeholder={OWNERNAME_PLACEHOLDER}
							value={ownerName}
							onChange={handleChangeOwnerName}
						/>
					</div>
					<div className='input-container'>
						<span className='input-title'>보안코드(CVC/CVV)</span>
						<Input
							className='input-basic w-25'
							type='password'
							value={securityCode}
							onChange={handleChangeSecurityCode}
						/>
					</div>
					<div className='input-container'>
						<span className='input-title'>카드 비밀번호</span>
						<Input
							className='input-basic w-15'
							type='password'
							value={cardPassword[FIRST_NUMBER]}
							name={FIRST_NUMBER}
							onChange={handleChangeCardPassword}
						/>
						<Input
							className='input-basic w-15'
							type='password'
							value={cardPassword[SECOND_NUMBER]}
							name={SECOND_NUMBER}
							onChange={handleChangeCardPassword}
						/>
						<input className='input-basic input-disabled w-15' type='password' value='*' disabled />
						<input className='input-basic input-disabled w-15' type='password' value='*' disabled />
					</div>
					<div className='button-box'>
						<span className='button-text'>다음</span>
					</div>
				</div>
			</div>
			<div className='root'>
				<div className='app flex-column-center'>
					<div className='flex-center'>
						<h2 className='page-title mb-10'>보유 카드</h2>
					</div>
					<div className='card-box'>
						<div className='small-card'>
							<div className='card-top'>
								<span className='card-text'>클린카드</span>
							</div>
							<div className='card-middle'>
								<div className='small-card__chip'></div>
							</div>
							<div className='card-bottom'>
								<div className='card-bottom__number'>
									<span className='card-text'>1111 - 2222 - oooo - oooo</span>
								</div>
								<div className='card-bottom__info'>
									<span className='card-text'>YUJO</span>
									<span className='card-text'>12 / 23</span>
								</div>
							</div>
						</div>
					</div>
					<span className='card-nickname'>법인카드</span>
					<div className='card-box'>
						<div className='empty-card'>+</div>
					</div>
				</div>
			</div>
		</div>
	);
}

