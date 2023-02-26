import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CardOwnerName } from '@/types/card';

type InitValue = {
  cardOwnerName: CardOwnerName;
  setCardOwnerName: (cardOwnerName: CardOwnerName) => void;
  resetCardOwnerName: () => void;
  handleChangeCardOwnerName: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardOwnerName: '',
  setCardOwnerName: () => null,
  resetCardOwnerName: () => null,
  handleChangeCardOwnerName: () => null,
};

export const CardOwnerNameContext = createContext(initValue);

export default function CardOwnerNameProvider({ children }: PropsWithChildren) {
  const [cardOwnerName, setCardOwnerName] = useState('');

  const resetCardOwnerName = useCallback(() => {
    setCardOwnerName('');
  }, []);

  const handleChangeCardOwnerName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCardOwnerName(value);
  }, []);

  const contextValue = useMemo(
    () => ({ cardOwnerName, setCardOwnerName, resetCardOwnerName, handleChangeCardOwnerName }),
    [cardOwnerName, resetCardOwnerName, handleChangeCardOwnerName],
  );

  return <CardOwnerNameContext.Provider value={contextValue}>{children}</CardOwnerNameContext.Provider>;
}
