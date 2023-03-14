import React from 'react';

import type { ExpireDatesState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { padNumber } from '@/utils';

interface CardExpireDateProps {
  expireDates?: ExpireDatesState;
}

export function CardExpireDate({ expireDates }: CardExpireDateProps) {
  return (
    <span className="card-text">
      <span className="card-text card-expire-date">{padNumber(2, expireDates?.[0].value)}</span>
      <span className="card-text mx-5">/</span>
      <span className="card-text card-expire-date">{padNumber(2, expireDates?.[1].value)}</span>
    </span>
  );
}
