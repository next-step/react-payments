import type { CardNumberType } from '../types/CardFormType';
import type { ExpirationDateType } from '../types/CardFormType';

import { OWNER_NAME_DEFAULT } from '../constants/cardDefaultValue';
import {
  CARD_NUMBER_LIMIT,
  EXPIRATION_DATE_LIMIT,
} from '../constants/cardLimit';
import {
  EXPIRATION_DATE_MONTH_PLACEHOLDER,
  EXPIRATION_DATE_YEAR_PLACEHOLDER,
} from '../constants/cardPlaceHolder';

type CardProps = {
  variant: 'big' | 'small';
  cardNumber: CardNumberType;
  ownerName: string;
  expirationDate: ExpirationDateType;
  cardCompany: string;
};

const SLASH = '/';
const HYPHEN = '-';

const specialCharacter = (
  value: string,
  limit: number,
  specialCharacter: string
) => (value.length === limit ? specialCharacter : '');

export default function Card({
  variant,
  cardNumber,
  ownerName,
  expirationDate,
  cardCompany,
}: CardProps) {
  const cardClassName = `card-text${variant === 'big' ? '__big' : ''}`;

  return (
    <>
      <div className="card-top">
        <span className={cardClassName}>{cardCompany} 카드</span>
      </div>
      <div className="card-middle">
        <div className={`${variant}-card__chip`}></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          <span className={cardClassName}>
            {cardNumber.firstNumber +
              specialCharacter(
                cardNumber.firstNumber,
                CARD_NUMBER_LIMIT,
                HYPHEN
              )}

            {cardNumber.secondNumber +
              specialCharacter(
                cardNumber.secondNumber,
                CARD_NUMBER_LIMIT,
                HYPHEN
              )}

            {'*'.repeat(cardNumber.thirdNumber.length) +
              specialCharacter(
                cardNumber.thirdNumber,
                CARD_NUMBER_LIMIT,
                HYPHEN
              )}

            {'*'.repeat(cardNumber.fourthNumber.length)}
          </span>
        </div>
        <div className="card-bottom__info">
          <span className={cardClassName}>
            {ownerName || OWNER_NAME_DEFAULT}
          </span>
          <span className={cardClassName}>
            {expirationDate.month || expirationDate.year
              ? `${expirationDate.month} 
								   ${specialCharacter(expirationDate.month, EXPIRATION_DATE_LIMIT, SLASH)}
								   ${expirationDate.year}`
              : `${EXPIRATION_DATE_MONTH_PLACEHOLDER} ${SLASH} ${EXPIRATION_DATE_YEAR_PLACEHOLDER}`}
          </span>
        </div>
      </div>
    </>
  );
}
