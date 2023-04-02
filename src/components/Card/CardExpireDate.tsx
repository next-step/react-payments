import React from 'react';

import { padNumber } from '@/utils';

import { TCardExpireDateProp } from './types';

interface CardExpireDateProps {
  expireDates?: TCardExpireDateProp[];
}

export function CardExpireDate({ expireDates }: CardExpireDateProps) {
  return (
    <span className="card-text">
      <span className="card-text card-expire-date">{padNumber(2, expireDates?.[0])}</span>
      <span className="card-text mx-5">/</span>
      <span className="card-text card-expire-date">{padNumber(2, expireDates?.[1])}</span>
    </span>
  );
}
