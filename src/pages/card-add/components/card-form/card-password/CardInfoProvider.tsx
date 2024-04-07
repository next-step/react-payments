import { CardStateType } from '@/domain/type';
import { createContext, useState, type PropsWithChildren } from 'react';

interface CardInfoType {
  cardState: CardStateType;
  handleCardState: (data: CardStateType) => void;
}

const initialState: CardInfoType = {
  cardState: {},
  handleCardState: () => null,
};

export const CardInfoContext = createContext(initialState);

const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardState, setCardState] = useState<CardStateType>({});

  const handleCardState = (data: CardStateType) => {
    setCardState((prev) => ({ ...prev, ...data }));
  };

  return (
    <CardInfoContext.Provider value={{ cardState, handleCardState }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
