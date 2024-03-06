/* eslint-disable @typescript-eslint/naming-convention */
import type CardNumberType from '../types/CardNumberType';
import type ExpirationDateType from '../types/ExpirationDateType';

import {OWNER_NAME_DEFAULT} from '../constants/default';
import {CARD_NUMBER_LIMIT, EXPIRATION_DATE_LIMIT} from '../constants/limit';
import {EXPIRATION_DATE_MONTH_PLACEHOLDER, EXPIRATION_DATE_YEAR_PLACEHOLDER} from '../constants/placeHolder';

type CardProps = {
	variant: 'big' | 'small';
	cardNumber: CardNumberType;
	ownerName: string;
	expirationDate: ExpirationDateType;
};

export default function Card({
	variant,
	cardNumber,
	ownerName,
	expirationDate,
}: CardProps) {
	const SLASH = '/';
	const HYPHEN = '-';

	const specialCharacter = (
		value: string,
		limit: number,
		specialCharacter: string,
	) => value.length === limit ? specialCharacter : '';

	return (
		<>
			<div className='card-top'>
				<span className={`card-text${variant === 'big' ? '__big' : ''}`}>클린카드</span>
			</div>
			<div className='card-middle'>
				<div className={`${variant}-card__chip`}></div>
			</div>
			<div className='card-bottom'>
				<div className='card-bottom__number'>
					<span className={`card-text${variant === 'big' ? '__big' : ''}`}>
						{cardNumber.firstNumber
						+ specialCharacter(cardNumber.firstNumber, CARD_NUMBER_LIMIT, HYPHEN)}

						{cardNumber.secondNumber
						+ specialCharacter(cardNumber.secondNumber, CARD_NUMBER_LIMIT, HYPHEN)}

						{'*'.repeat(cardNumber.thirdNumber.length)
						+ specialCharacter(cardNumber.thirdNumber, CARD_NUMBER_LIMIT, HYPHEN)}

						{'*'.repeat(cardNumber.fourthNumber.length)}
					</span>

				</div>
				<div className='card-bottom__info'>
					<span className={`card-text${variant === 'big' ? '__big' : ''}`}>{ownerName || OWNER_NAME_DEFAULT}</span>
					<span className={`card-text${variant === 'big' ? '__big' : ''}`}>
						{
							(expirationDate.month || expirationDate.year)
								? `${expirationDate.month} 
								   ${specialCharacter(expirationDate.month, EXPIRATION_DATE_LIMIT, SLASH)}
								   ${expirationDate.year}`
								: `${EXPIRATION_DATE_MONTH_PLACEHOLDER} ${SLASH} ${EXPIRATION_DATE_YEAR_PLACEHOLDER}`
						}
					</span>
				</div>
			</div>
		</>
	);
}
