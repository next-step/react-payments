import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CardOwnerName } from '@/types/card';

type InitValue = {
  cardOwnerName: CardOwnerName;
  handleChangeCardOwnerName: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardOwnerName: '',
  handleChangeCardOwnerName: () => null,
};

export const CardOwnerNameContext = createContext(initValue);

export default function CardOwnerNameProvider({ children }: PropsWithChildren) {
  const [cardOwnerName, setCardOwnerName] = useState('');

  const handleChangeCardOwnerName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCardOwnerName(value);
  }, []);

  const contextValue = useMemo(
    () => ({ cardOwnerName, handleChangeCardOwnerName }),
    [cardOwnerName, handleChangeCardOwnerName],
  );

  return <CardOwnerNameContext.Provider value={contextValue}>{children}</CardOwnerNameContext.Provider>;
}
