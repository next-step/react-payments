import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardListContext } from '../CardListProvider';

export default function useCardListContext() {
  const cardListContext = useContext(CardListContext);

  if (cardListContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardListContext;
}
