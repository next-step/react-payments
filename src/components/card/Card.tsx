import { SYMBOL } from '@/constants/symbol';
import { Card as CardData } from '@/pages/Payments/payments.type';
import { Formatter } from '@/utils/formatter';
import { CARD_COMPANY } from '../input/molecules/card/company/company.constant';

interface CardProps {
  data: CardData;
  isComplete?: boolean;
  onClick?: () => void;
}

const DEFAULT_VALUE = {
  OWNER_NAME: 'NAME',
  EXPIRE_MONTH: 'MM',
  EXPIRE_YEAR: 'YY',
} as const;

export const Card = ({ data, onClick, isComplete }: CardProps) => {
  const {
    ownerName,
    numberFirst,
    numberSecond,
    numberThird,
    numberFourth,
    expireMonth,
    expireYear,
    company,
  } = data;

  const expireDate = `${expireMonth || DEFAULT_VALUE.EXPIRE_MONTH} / ${
    expireYear || DEFAULT_VALUE.EXPIRE_YEAR
  }`;

  const optionalClassName = isComplete ? 'small-card' : 'empty-card';
  const optionalColor = company ? CARD_COMPANY[company]?.color : '';
  const companyName = company || '기본 펭구 카드';

  return (
    <div className='card-box hover'>
      <div
        className={`${optionalClassName} transition`}
        style={{
          background: optionalColor,
        }}
        onClick={onClick}
      >
        <div className='card-top'>
          {isComplete && <span className='card-text'>{companyName}</span>}
        </div>
        <div className='card-middle'>
          <div className='small-card__chip'></div>
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number card-text__big'>
            <span>
              {Formatter.segment(numberFirst, {
                separator: SYMBOL.HYPHEN,
                length: 4,
              })}
            </span>
            <span>
              {Formatter.segment(numberSecond, {
                separator: SYMBOL.HYPHEN,
                length: 4,
              })}
            </span>
            <span>
              {Formatter.segment(
                numberThird && Formatter.masking(numberThird),
                {
                  separator: SYMBOL.HYPHEN,
                  length: 4,
                }
              )}
            </span>
            <span>
              {(numberFourth && Formatter.masking(numberFourth)) || ''}
            </span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text text-ellipsis w-50'>
              {ownerName || DEFAULT_VALUE.OWNER_NAME}
            </span>
            <span className='card-text'>{expireDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
