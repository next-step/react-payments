import { createContext, ReactNode, useContext, useState } from 'react';
import { Card } from '../types';

const CardContext =
  createContext<{
    card: Card | null;
    setCard: (update: Card | ((prevState: Card | null) => Card | null) | null) => void;
  } | null>(null);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [card, setCard] = useState<Card | null>(null);

  return <CardContext.Provider value={{ card, setCard }}>{children}</CardContext.Provider>;
};

export function useCard() {
  const context = useContext(CardContext);

  if (!context) {
    throw Error('card context exception occurred');
  }

  return context;
}
