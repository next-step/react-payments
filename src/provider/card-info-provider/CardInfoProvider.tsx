import { CardStateType } from '@/domain/type';
import { createContext, useState, type PropsWithChildren } from 'react';

interface CardInfoType {
  cardState: CardStateType;
  handleCardState: (data: any) => void;
  reset: () => void;
}

const initialContext: CardInfoType = {
  cardState: {},
  handleCardState: () => undefined,
  reset: () => undefined,
};
const initialState = {
  cardNumbers: { first: '', second: '', third: '', fourth: '' },
  securityCode: '',
  firstCardPassword: '',
  secondCardPassword: '',
  ownerName: '',
  month: '',
  year: '',
};

export const CardInfoContext = createContext(initialContext);

const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardState, setCardState] = useState<CardStateType>(initialState);

  const handleCardState = (data: CardStateType) => {
    setCardState((prev) => ({ ...prev, ...data }));
  };

  const reset = () => {
    setCardState(initialState);
  };

  return (
    <CardInfoContext.Provider value={{ cardState, handleCardState, reset }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
