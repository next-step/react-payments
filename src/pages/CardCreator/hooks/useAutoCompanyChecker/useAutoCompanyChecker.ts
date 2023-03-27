import { useEffect } from 'react';

import { useCardApiContext } from '@/stores/CardContext';

import { autoCompanyChecker } from './autoCompanyChecker';

// 앞자리 두개를 받아 확인
export function useAutoCompanyChecker(cardNumber1?: string, cardNumber2?: string) {
  const cardContextApis = useCardApiContext();

  useEffect(() => {
    if (!cardNumber1 || !cardNumber2) return;

    const cardCompany = autoCompanyChecker(cardNumber1.concat(cardNumber2));
    if (cardCompany) {
      cardContextApis?.dispatch({ type: 'cardCompanies', payload: { index: 0, value: cardCompany } });
    }
  }, [cardNumber1, cardNumber2, cardContextApis]);
}
