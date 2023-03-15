import React from 'react';

import { TCardOwnerNameProp } from './types';

interface CardOwnerNameProps {
  ownerName?: TCardOwnerNameProp;
}

export function CardOwnerName({ ownerName }: CardOwnerNameProps) {
  return <span className="card-text card-name-spacing">{ownerName || 'NAME'}</span>;
}
