import React, { useContext } from 'react';

import { CardOwnersStoreContext } from '@/stores/cardCreator';

interface CardOwnerNameProps {}

function CardOwnerName(_: CardOwnerNameProps) {
  const cardOwnerStore = useContext(CardOwnersStoreContext);
  const ownerName = cardOwnerStore?.store[0].value;

  return <span className="card-text card-name-spacing">{ownerName || 'NAME'}</span>;
}

export { CardOwnerName };
