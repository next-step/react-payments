import { PropsWithChildren, createContext, useState } from 'react';

import { CardType } from '../types/CardFormType';

type CardsType = {
  cards: CardType[];
};

type initialCardStateType = {
  cardsState: CardsType;
  handleChangeCardsState: (data: CardsType[]) => void;
};

const initialState: initialCardStateType = {
  cardsState: {} as CardsType,
  handleChangeCardsState: () => null,
};

export const CardsContext = createContext(initialState);

export default function CardProvider({ children }: PropsWithChildren) {
  const [cardsState, setCardsState] = useState<CardsType>({} as CardsType);

  const handleChangeCardsState = (data: CardsType[]) => {
    setCardsState((cardsState) => ({ ...cardsState, ...data }));
  };

  return (
    <CardsContext.Provider value={{ cardsState, handleChangeCardsState }}>
      {children}
    </CardsContext.Provider>
  );
}
