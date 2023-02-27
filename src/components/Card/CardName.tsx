import React from 'react';

import type { CardNumber } from '@/types';

export type CardNumbers = {
  isHide: boolean;
  value?: CardNumber;
}[];

interface CardNameProps {
  cardNumbers: CardNumbers;
}

function CardName({ cardNumbers }: CardNameProps) {
  return (
    <div className="card-bottom__number">
      {cardNumbers.map(({ isHide, value }, i) => {
        return (
          <span key={`card-number-${i}`} className="card-number-wrapper card-number-spacing">
            {value && value.split('').map((cardNum) => (isHide ? '*' : cardNum))}
          </span>
        );
      })}
    </div>
  );
}

export { CardName };
