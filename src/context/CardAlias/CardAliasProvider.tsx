import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

type InitValue = {
  cardAlias: string;
  setCardAlias: (cardAlias: string) => void;
  resetCardAlias: () => void;
  handleChangeCardAlias: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardAlias: '',
  setCardAlias: () => null,
  resetCardAlias: () => null,
  handleChangeCardAlias: () => null,
};

export const CardAliasContext = createContext(initValue);

export default function CardAliasContextProvider({ children }: PropsWithChildren) {
  const [cardAlias, setCardAlias] = useState('');

  const resetCardAlias = useCallback(() => {
    setCardAlias('');
  }, []);

  const handleChangeCardAlias = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 10) {
      return;
    }

    setCardAlias(value);
  }, []);

  const contextValue = useMemo(
    () => ({ cardAlias, setCardAlias, resetCardAlias, handleChangeCardAlias }),
    [cardAlias, resetCardAlias, handleChangeCardAlias],
  );

  return <CardAliasContext.Provider value={contextValue}>{children}</CardAliasContext.Provider>;
}
