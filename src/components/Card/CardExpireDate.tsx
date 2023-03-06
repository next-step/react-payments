import React, { useContext } from 'react';

import { padNumber } from '@/utils';
import { ExpireDatesStoreContext } from '@/stores/cardCreator';

interface CardExpireDateProps {}

export function CardExpireDate(_: CardExpireDateProps) {
  const expireDatesStore = useContext(ExpireDatesStoreContext);
  const expireDates = expireDatesStore?.store || [];

  return (
    <span className="card-text">
      <span className="card-text card-expire-date">{padNumber(2, expireDates[0].value)}</span>
      <span className="card-text mx-5">/</span>
      <span className="card-text card-expire-date">{padNumber(2, expireDates[1].value)}</span>
    </span>
  );
}
