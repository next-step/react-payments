import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardOwnerNameContext } from '../CardOwnerNameProvider';

export default function useCardOwnerNameContext() {
  const cardOwnerNameContext = useContext(CardOwnerNameContext);

  if (cardOwnerNameContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardOwnerNameContext;
}
