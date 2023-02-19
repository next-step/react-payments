import { useMemo } from 'react';

import { CARD } from '@/constants/card';
import { isShowHyphen, maskingNumber } from '@/domain/card';
import { CardExpiration, CardNumber, CardOwnerName, SelectedCard } from '@/types/card';

type CardBoxProps = {
  cardNumber: CardNumber;
  cardExpiration: CardExpiration;
  cardOwnerName: CardOwnerName;
  selectedCard: SelectedCard;
};

export default function CardBox({ cardNumber, cardExpiration, cardOwnerName, selectedCard }: CardBoxProps) {
  const { num1, num2, num3, num4 } = cardNumber;
  const { month, year } = cardExpiration;
  const { name, color } = selectedCard;

  const cardStyle = useMemo(() => {
    return { backgroundColor: color };
  }, [color]);

  return (
    <div className="card-box">
      <div className="empty-card" style={cardStyle}>
        <div className="card-top">{name} 카드</div>
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
            <span className="card-text card-text__ellipsis">{cardOwnerName || CARD.OWNER_NAME.PLACEHOLDER}</span>
            <span className="card-text">
              {month || CARD.EXPIRATION.PLACEHOLDER.MONTH} / {year || CARD.EXPIRATION.PLACEHOLDER.YEAR}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
