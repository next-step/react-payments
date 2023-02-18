import { CardField } from '@/types';
import {
  addCardNumberDashes,
  addSeparator,
  replaceCardNumberToO,
} from '@/utils/formatter';
import React from 'react';
import { CardContainer } from './Card.style';

type CardProps = {
  size: 'small' | 'big';
} & Omit<CardField, 'cardPassword' | 'cvc'>;

const Card = ({
  size,
  cardNumber,
  expirationMonth,
  expirationYear,
  ownerName,
}: CardProps) => {
  const textClassName = `card-text` + (size === 'big' ? '__big' : '');

  return (
    <CardContainer size={size}>
      <div className="card-top">
        <span className={textClassName}>클린카드</span>
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
