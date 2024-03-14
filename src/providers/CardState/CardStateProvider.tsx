import {
  createContext,
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
  PropsWithChildren,
} from 'react';
import { CardInfo } from '../../types';

interface CardContextType {
  cardState: CardInfo;
  setCardState: Dispatch<SetStateAction<CardInfo>>;
  resetCardState: () => void;
}

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

const initialCardState: CardInfo = {
  id: '',
  brand: { label: '', color: '' },
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  expiration: { month: '', year: '' },
  password: { first: '', second: '' },
  securityCode: '',
  nickname: '',
  createdAt: '',
};

export const CardStateProvider = ({ children }: PropsWithChildren) => {
  const [cardState, setCardState] = useState<CardInfo>(initialCardState);

  const resetCardState = () => {
    setCardState(initialCardState);
  };

  const value = useMemo(
    () => ({ cardState, setCardState, resetCardState }),
    [cardState, setCardState]
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
