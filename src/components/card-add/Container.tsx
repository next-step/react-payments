import {useState} from 'react';

import Header from './Header';
import CardNumber from './CardNumber';
import ExpirationDate from './ExpirationDate';
import OwnerName from './OwnerName';
import SecurityCode from './SecurityCode';
import CardPassword from './CardPassword';
import Button from './Button';

import {
	CARD_NUMBER_LIMIT,
	EXPIRATION_DATE_LIMIT,
} from '../../constants/limit';
import {
	FIRST_NUMBER, SECOND_NUMBER, THIRD_NUMBER, FOURTH_NUMBER,
} from '../../constants/cardNumber';
import {MONTH, YEAR} from '../../constants/expirationDate';
import {
	EXPIRATION_DATE_MONTH_PLACEHOLDER,
	EXPIRATION_DATE_YEAR_PLACEHOLDER,
} from '../../constants/placeHolder';
import {OWNER_NAME_DEFAULT} from '../../constants/default';
import {HYPHEN, SLASH} from '../../constants/specialCharacter';

export default function Container() {
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

	const specialCharacter = (
		value: string,
		limit: number,
		specialCharacter: string,
	) => value.length === limit ? specialCharacter : '';

	return (
		<div>
			<div className='root'>
				<div className='app'>
					<Header />
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
									<span className='card-text'>{ownerName || OWNER_NAME_DEFAULT}</span>
									<span className='card-text'>
										{
											expirationDate[MONTH] || expirationDate[YEAR]
												? `${expirationDate[MONTH]} 
												   ${specialCharacter(expirationDate[MONTH], EXPIRATION_DATE_LIMIT, SLASH)}
												   ${expirationDate[YEAR]}`
												: `${EXPIRATION_DATE_MONTH_PLACEHOLDER} ${SLASH} ${EXPIRATION_DATE_YEAR_PLACEHOLDER}`
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
					<SecurityCode
						securityCode={securityCode}
						setSecurityCode={setSecurityCode}
					/>
					<CardPassword
						cardPassword={cardPassword}
						setCardPassword={setCardPassword}
					/>
					<Button
						location='/add/complete'
						text='다음'
					/>
				</div>
			</div>
		</div>
	);
}
