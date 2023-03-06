import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { CardCompanyModalContext } from '../CardCompanyModalProvider';

export default function useCardSelectModalContext() {
  const cardCompanyModalContext = useContext(CardCompanyModalContext);

  if (cardCompanyModalContext === undefined) {
    throw new Error(ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);
  }

  return cardCompanyModalContext;
}
