import { cls, renderTextDivider } from '@/utils';
import Chip from './Chip';
import { CardNumber, Expiration } from '@/types';
import { CARD_COMPANY_LIST } from '@/constants';

const DEFAULT_BACKGROUND_COLOR = 'bg-slate-200';

const getCardSize = (size: string) => {
  return size === 'sm' ? 'w-[210px] h-[130px]' : 'w-[290px] h-[180px]';
};

interface CardProps {
  cardNumber?: CardNumber;
  expiration?: Expiration;
  cardOwner?: string;
  cardCompany?: string;
  size?: 'sm' | 'lg';
  isEmpty?: boolean;
  onClick?: () => void;
}

function Card({ cardOwner, cardCompany, cardNumber, expiration, size = 'sm', isEmpty = false, onClick }: CardProps) {
  const cardSize = getCardSize(size);
  const bgColor =
    CARD_COMPANY_LIST.find(company => company.companyName === cardCompany)?.companyColorClassName ??
    DEFAULT_BACKGROUND_COLOR;

  if (isEmpty) {
    return (
      <div className={cls('flex items-center justify-center text-xs')}>
        <div
          className={cls(
            cardSize,
            DEFAULT_BACKGROUND_COLOR,
            'flex flex-col items-center justify-evenly w-[200px] h-[130px] py-2 px-4 rounded-lg',
            'relative overflow-hidden',
          )}
        >
          +
        </div>
      </div>
    );
  }

  return (
    <div onClick={onClick} className={cls('flex items-center justify-center text-xs')}>
      <div
        className={cls(
          cardSize,
          bgColor,
          'flex flex-col items-center justify-evenly w-[200px] h-[130px] py-2 px-4  rounded-lg',
          'relative overflow-hidden',
        )}
      >
        <div className="w-full flex-1">
          <span>{cardCompany}</span>
        </div>
        <Chip size={size} />
        <div className="w-full flex-1 my-2 flex flex-col justify-between">
          <div className="flex-1 w-full flex items-center py-2 justify-evenly">
            <span>{cardNumber?.cardNumber1}</span>
            <span>{cardNumber?.cardNumber2}</span>
            <span>{cardNumber?.cardNumber3}</span>
            <span>{cardNumber?.cardNumber4}</span>
          </div>
          <div className=" flex-1 flex items-end justify-between">
            <div className="flex-1 overflow-hidden text-ellipsis" title={cardOwner}>
              {cardOwner || 'Name'}
            </div>
            <div>
              {!expiration?.month && !expiration?.year
                ? 'MM/YY'
                : `${expiration?.month}${renderTextDivider({ formerValue: expiration?.month, divider: '/' })}${
                    expiration?.year
                  }`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
