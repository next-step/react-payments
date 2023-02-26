import { useMemo } from 'react';

import { CardAlias, CardExpiration, CardNumber, CardOwnerName, SelectedCard } from '@/types/card';
import { maskingNumber } from '@/domain/card/card';

import Box from '../Box';
import Button from '../Button';

type CardProps = {
  type: 'big' | 'small';
  isShowAlias?: boolean;
  onClick?: () => void;
  selectedCard: SelectedCard;
  cardNumber: CardNumber;
  cardOwnerName: CardOwnerName;
  cardExpiration: CardExpiration;
  cardAlias: CardAlias;
};

export default function Card({
  type,
  isShowAlias,
  onClick,
  selectedCard,
  cardNumber,
  cardOwnerName,
  cardExpiration,
  cardAlias,
}: CardProps) {
  const { name, color } = selectedCard;
  const { num1, num2, num3, num4 } = cardNumber;
  const { month, year } = cardExpiration;

  const cardStyle = useMemo(() => {
    return { backgroundColor: color };
  }, [color]);

  return (
    <Box display="flex-col" className="card-box">
      <Button onClick={onClick}>
        <div className={`${type}-card`} style={cardStyle}>
          <div className="card-top">
            <span className={`card-text__${type}`}>{name}</span>
          </div>
          <div className="card-middle">
            <div className={`${type}-card__chip`} />
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className={`card-text__${type}`}>
                {num1} - {num2} - {maskingNumber(num3)} - {maskingNumber(num4)}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className={`card-text__${type} card-text__ellipsis__${type}`}>{cardOwnerName}</span>
              <span className={`card-text__${type}`}>
                {month} / {year}
              </span>
            </div>
          </div>
        </div>
        {isShowAlias && <Box className="mt-2">{cardAlias}</Box>}
      </Button>
    </Box>
  );
}
