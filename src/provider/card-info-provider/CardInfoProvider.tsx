import { CardStateType } from '@/domain/type';
import { createContext, useState, type PropsWithChildren } from 'react';

interface CardInfoType {
  cardState: CardStateType;
  handleCardState: (data: any) => void;
}

const initialState: CardInfoType = {
  cardState: {},
  handleCardState: () => undefined,
};

export const CardInfoContext = createContext(initialState);

const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardState, setCardState] = useState<CardStateType>({
    cardNumbers: { first: '', second: '', third: '', fourth: '' },
    securityCode: '',
    firstCardPassword: '',
    secondCardPassword: '',
    ownerName: '',
    month: '',
    year: '',
  });

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
