import { useEffect } from 'react';

import { autoCompanyChecker } from './autoCompanyChecker';
import { useCardContextApiSelector } from '@/stores/CardContext';

// 앞자리 두개를 받아 확인
export function useAutoCompanyChecker(cardNumber1?: string, cardNumber2?: string) {
  const cardContextApis = useCardContextApiSelector();

  useEffect(() => {
    if (!cardNumber1 || !cardNumber2) return;

    const cardCompany = autoCompanyChecker(cardNumber1.concat(cardNumber2));
    if (cardCompany) {
      cardContextApis?.dispatch({ type: 'cardCompany', payload: { value: cardCompany } });
    }
  }, [cardNumber1, cardNumber2, cardContextApis]);
}
