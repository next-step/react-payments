import { useContext } from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { assert } from '@/utils/validation';

import { CardCompanyModalContext } from '../CardCompanyModalProvider';

export default function useCardCompanyModalContext() {
  const cardCompanyModalContext = useContext(CardCompanyModalContext);

  assert(cardCompanyModalContext != null, ERROR_MESSAGE.PROVIDER.INVALID_SCOPE);

  return cardCompanyModalContext;
}
