import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardExpirationContext } from '../CardExpirationProvider';

export default function useCardExpirationContext() {
  const cardExpirationContext = useContext(CardExpirationContext);

  if (cardExpirationContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardExpirationContext;
}
