import { SYMBOL } from '@/constants/symbol';
import { Card as CardData } from '@/pages/Payments/payments.type';
import { Formatter } from '@/utils/formatter';

interface CardProps {
  data: CardData;
  isComplete?: boolean;
  onClick?: () => void;
}

const ELLIPSIS_LENGTH = 11;
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
  } = data;

  const expireDate = `${expireMonth || DEFAULT_VALUE.EXPIRE_MONTH} / ${
    expireYear || DEFAULT_VALUE.EXPIRE_YEAR
  }`;

  const optionalClassName = isComplete ? 'small-card' : 'empty-card';

  return (
    <div className='card-box'>
      <div className={optionalClassName} onClick={onClick}>
        <div className='card-top'>
          {isComplete && <span className='card-text'>펭구카드</span>}
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
            <span className='card-text'>
              {Formatter.ellipsis(
                ownerName || DEFAULT_VALUE.OWNER_NAME,
                ELLIPSIS_LENGTH
              )}
            </span>
            <span className='card-text'>{expireDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
