import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  SetStateAction,
  Dispatch,
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
  brand: '',
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  expiration: { month: '', year: '' },
  password: { first: '', second: '' },
  securityCode: '',
  nickname: '',
};

interface CardProviderProps {
  children: ReactNode;
}

export const CardStateProvider = ({ children }: CardProviderProps) => {
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
