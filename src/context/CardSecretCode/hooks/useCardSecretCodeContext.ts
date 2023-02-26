import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardSecretCodeContext } from '../CardSecretCodeProvider';

export default function useCardSecretCodeContext() {
  const cardSecretCodeContext = useContext(CardSecretCodeContext);

  if (cardSecretCodeContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardSecretCodeContext;
}
