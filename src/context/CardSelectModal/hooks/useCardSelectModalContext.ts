import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardSelectModalContext } from '../CardSelectModalProvider';

export default function useCardSelectModalContext() {
  const cardSelectModalContext = useContext(CardSelectModalContext);

  if (cardSelectModalContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardSelectModalContext;
}
