import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { assert } from '@/utils/validation';

import { CardAddFormContext } from '../CardAddFormProvider';

export default function useCardAliasProvider() {
  const cardAddFormContext = useContext(CardAddFormContext);

  assert(cardAddFormContext != null, ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);

  return cardAddFormContext;
}
