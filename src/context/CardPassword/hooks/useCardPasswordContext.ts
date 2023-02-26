import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardPasswordContext } from '../CardPasswordProvider';

export default function useCardPasswordContext() {
  const cardPasswordContext = useContext(CardPasswordContext);

  if (cardPasswordContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardPasswordContext;
}
