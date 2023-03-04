import React from 'react';

import type { CardNumber as CardNumberType } from '@/types';

type CardNumberModel = {
  isHide: boolean;
  value?: CardNumberType;
};

export type CardNumbersModel = CardNumberModel[];

interface CardNumbersProps {
  cardNumbers: CardNumbersModel;
}

function CardNumbers({ cardNumbers }: CardNumbersProps) {
  return (
    <div className="card-bottom__number">
      {cardNumbers.map((cardNumber, i) => (
        <CardNumber key={`card-number-${i}-${cardNumber.value}`} {...cardNumber} />
      ))}
    </div>
  );
}

function CardNumber({ isHide, value }: CardNumberModel) {
  return <span className="card-number-wrapper card-number-spacing">{value && makeCardNumber(value, isHide)}</span>;
}

function makeCardNumber(value: string, isHide: boolean) {
  return value.split('').map((cardNum) => (isHide ? '*' : cardNum));
}

export { CardNumbers };
