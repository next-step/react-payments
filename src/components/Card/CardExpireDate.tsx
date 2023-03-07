import React from 'react';

import { padNumber } from '@/utils';
import { useSelectExpireDates } from '@/stores/CardCreatorContext';

interface CardExpireDateProps {}

export function CardExpireDate(_: CardExpireDateProps) {
  const expireDates = useSelectExpireDates();

  return (
    <span className="card-text">
      <span className="card-text card-expire-date">{padNumber(2, expireDates?.[0].value)}</span>
      <span className="card-text mx-5">/</span>
      <span className="card-text card-expire-date">{padNumber(2, expireDates?.[1].value)}</span>
    </span>
  );
}
