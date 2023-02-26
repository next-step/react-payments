import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CARD } from '@/constants/card';
import { CardSecretCode } from '@/types/card';
import { isNumber } from '@/utils';

type InitValue = {
  cardSecretCode: CardSecretCode;
  카드CVC가모두입력된: boolean;
  resetCardSecretCode: () => void;
  handleChangeCardSecretCode: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardSecretCode: '',
  카드CVC가모두입력된: false,
  resetCardSecretCode: () => null,
  handleChangeCardSecretCode: () => null,
};

export const CardSecretCodeContext = createContext(initValue);

export default function CardSecretCodeProvider({ children }: PropsWithChildren) {
  const [cardSecretCode, setCardSecretCode] = useState('');

  const 카드CVC가모두입력된 = cardSecretCode.length === CARD.SECRET_CODE.LENGTH;

  const resetCardSecretCode = useCallback(() => {
    setCardSecretCode('');
  }, []);

  const handleChangeCardSecretCode = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isNumber(value) && value !== '') {
      return;
    }

    setCardSecretCode(value);
  }, []);

  const contextValue = useMemo(
    () => ({ cardSecretCode, 카드CVC가모두입력된, resetCardSecretCode, handleChangeCardSecretCode }),
    [cardSecretCode, 카드CVC가모두입력된, resetCardSecretCode, handleChangeCardSecretCode],
  );

  return <CardSecretCodeContext.Provider value={contextValue}>{children}</CardSecretCodeContext.Provider>;
}
