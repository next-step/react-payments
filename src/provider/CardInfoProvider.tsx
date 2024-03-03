import { createContext, useState, type PropsWithChildren } from 'react';

export type KeyIndex = {
  [key in string]: string;
};
export type CardStateType = {
  cardNumbers?: string[];
  securityCode?: string;
  firstCardPassword?: string;
  secondCardPassword?: string;
  ownerName?: string;
  month?: string;
  year?: string;
} & KeyIndex;

interface CardInfoType {
  cardState: CardStateType;
  handleCardState: (data: any) => void;
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
