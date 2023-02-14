import { CARD_EXPIRATION, CARD_OWNER_NAME } from '@/constants/card';
import { isShowHyphen, maskingNumber } from '@/domain/card';
import { CardExpiration, CardNumber, CardOwnerName } from '@/types/Card';

type CardBoxProps = {
  cardNumber: CardNumber;
  cardExpiration: CardExpiration;
  cardOwnerName: CardOwnerName;
};

export default function CardBox({ cardNumber, cardExpiration, cardOwnerName }: CardBoxProps) {
  const { num1, num2, num3, num4 } = cardNumber;
  const { month, year } = cardExpiration;

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top" />
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-number">
          <span className="card-number">{num1}</span>
          {isShowHyphen(num1, num2) && <span>-</span>}

          <span className="card-number">{num2}</span>
          {isShowHyphen(num2, num3) && <span>-</span>}

          <span className="card-number">{maskingNumber(num3)}</span>
          {isShowHyphen(num3, num4) && <span>-</span>}

          <span className="card-number">{maskingNumber(num4)}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text card-text__ellipsis">{cardOwnerName || CARD_OWNER_NAME.PLACEHOLDER}</span>
            <span className="card-text">
              {month || CARD_EXPIRATION.PLACEHOLDER.MONTH} / {year || CARD_EXPIRATION.PLACEHOLDER.YEAR}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
