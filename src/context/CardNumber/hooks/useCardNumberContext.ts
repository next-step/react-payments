import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardNumberContext } from '../CardNumberProvider';

export default function useCardNumberContext() {
  const cardNumberContext = useContext(CardNumberContext);

  if (cardNumberContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardNumberContext;
}
