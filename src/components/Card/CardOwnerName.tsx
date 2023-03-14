import React from 'react';

import { CardOwnersState } from '@/stores/CardCreatorContext/CardCreatorStates';

interface CardOwnerNameProps {
  ownerName?: CardOwnersState;
}

export function CardOwnerName({ ownerName }: CardOwnerNameProps) {
  return <span className="card-text card-name-spacing">{ownerName?.[0].value || 'NAME'}</span>;
}
