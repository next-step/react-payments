import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardAddFormContext } from '../CardAddFormProvider';

export default function useCardAliasProvider() {
  const cardAddFormContext = useContext(CardAddFormContext);

  if (cardAddFormContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardAddFormContext;
}
