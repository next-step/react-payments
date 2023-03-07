import React from 'react';

import type { CardNumber as CardNumberType } from '@/types';
import { useSelectCardNumbers } from '@/stores/cardCreator';

type CardNumberModel = {
  isHide: boolean;
  value?: CardNumberType;
};

export type CardNumbersModel = CardNumberModel[];

interface CardNumbersProps {}

function CardNumbers(_: CardNumbersProps) {
  const cardNumbers = useSelectCardNumbers();

  return (
    <div className="card-bottom__number">
      {cardNumbers?.map((cardNumber, i) => (
        <CardNumber
          key={`card-number-${i}-${cardNumber.value}`}
          isHide={cardNumber.type === 'password'}
          value={cardNumber.value}
        />
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
