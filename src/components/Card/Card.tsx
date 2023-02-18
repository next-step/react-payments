import React from 'react';
import {
  addCardNumberDashes,
  addSeparator,
  replaceCardNumberToO,
} from '@/utils/formatter';
import { CardContainer } from './Card.style';
import { CardField } from '@/types';
import { Colors, colors } from '@/styles/colors';

type CardProps = {
  size: 'small' | 'big';
  cardColor: Colors;
  cardName?: string;
} & Omit<CardField, 'cardPassword' | 'cvc'>;

const Card = ({
  size,
  cardNumber,
  expirationMonth,
  expirationYear,
  cardName,
  cardColor,
  ownerName,
}: CardProps) => {
  const textClassName = `card-text` + (size === 'big' ? '__big' : '');

  return (
    <CardContainer cardColor={colors[cardColor]} size={size}>
      <div className="card-top">
        {cardName && <span className={textClassName}>{cardName}</span>}
      </div>
      <div className="card-middle">
        <div className={`${size}-card__chip`}></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          <span className={textClassName}>
            {replaceCardNumberToO(addCardNumberDashes(cardNumber))}
          </span>
        </div>
        <div className="card-bottom__info">
          <span className={textClassName}>{ownerName}</span>
          <span className={textClassName}>
            {addSeparator(expirationMonth + expirationYear)}
          </span>
        </div>
      </div>
    </CardContainer>
  );
};

export default React.memo(Card);
