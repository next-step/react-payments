import React from 'react';

import { TCardNumberProp } from './types';

interface CardNumbersProps {
  cardNumbers?: TCardNumberProp[];
}

export function CardNumbers({ cardNumbers }: CardNumbersProps) {
  return (
    <div className="card-bottom__number">
      {cardNumbers?.map((cardNumber, i) => (
        <CardNumber key={`card-number-${i}-${cardNumber.value}`} {...cardNumber} />
      ))}
    </div>
  );
}

function CardNumber({ type, value }: TCardNumberProp) {
  const isHide = type === 'password';
  return <span className="card-number-wrapper card-number-spacing">{value && makeCardNumber(value, isHide)}</span>;
}

function makeCardNumber(value: string, isHide: boolean) {
  return value.split('').map((cardNum) => (isHide ? '*' : cardNum));
}
