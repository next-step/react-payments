import React from 'react';

import { useSelectCardOwners } from '@/stores/cardCreator';

interface CardOwnerNameProps {}

function CardOwnerName(_: CardOwnerNameProps) {
  const ownerName = useSelectCardOwners();

  return <span className="card-text card-name-spacing">{ownerName?.[0].value || 'NAME'}</span>;
}

export { CardOwnerName };
