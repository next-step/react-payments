import { PropsWithChildren, createContext, useState } from 'react';

import { CardType } from '../types/CardFormType';

type initialCardStateType = {
  cardState: CardType;
  handleChangeCardState: (data: CardType) => void;
};

const initialState: initialCardStateType = {
  cardState: {},
  handleChangeCardState: () => null,
};

export const CardContext = createContext(initialState);

export default function CardProvider({ children }: PropsWithChildren) {
  const [cardState, setCardState] = useState<CardType>({});

  const handleChangeCardState = (data: CardType) => {
    setCardState((cardState) => ({ ...cardState, ...data }));
  };

  return (
    <CardContext.Provider value={{ cardState, handleChangeCardState }}>
      {children}
    </CardContext.Provider>
  );
}
