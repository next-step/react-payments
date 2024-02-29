import type CardNumberType from '../types/CardNumberType';
import type ExpirationDateType from '../types/ExpirationDateType';

import {
	FIRST_NUMBER, FOURTH_NUMBER, SECOND_NUMBER, THIRD_NUMBER,
} from '../constants/cardNumber';
import {MONTH, YEAR} from '../constants/expirationDate';
import {OWNER_NAME_DEFAULT} from '../constants/default';
import {CARD_NUMBER_LIMIT, EXPIRATION_DATE_LIMIT} from '../constants/limit';
import {HYPHEN, SLASH} from '../constants/specialCharacter';
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
						{cardNumber[FIRST_NUMBER]
						+ specialCharacter(cardNumber[FIRST_NUMBER], CARD_NUMBER_LIMIT, HYPHEN)}

						{cardNumber[SECOND_NUMBER]
						+ specialCharacter(cardNumber[SECOND_NUMBER], CARD_NUMBER_LIMIT, HYPHEN)}

						{'*'.repeat(cardNumber[THIRD_NUMBER].length)
						+ specialCharacter(cardNumber[THIRD_NUMBER], CARD_NUMBER_LIMIT, HYPHEN)}

						{'*'.repeat(cardNumber[FOURTH_NUMBER].length)}

					</span>

				</div>
				<div className='card-bottom__info'>
					<span className={`card-text${variant === 'big' ? '__big' : ''}`}>{ownerName || OWNER_NAME_DEFAULT}</span>
					<span className={`card-text${variant === 'big' ? '__big' : ''}`}>
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
		</>
	);
}
