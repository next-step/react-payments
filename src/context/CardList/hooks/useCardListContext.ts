import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { assert } from '@/utils/validation';

import { CardListContext } from '../CardListProvider';

export default function useCardListContext() {
  const cardListContext = useContext(CardListContext);

  assert(cardListContext != null, ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);

  return cardListContext;
}
