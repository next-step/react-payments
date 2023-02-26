import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardAliasContext } from '../CardAliasProvider';

export default function useCardAliasProvider() {
  const cardAliasProvider = useContext(CardAliasContext);

  if (cardAliasProvider === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardAliasProvider;
}
