import { createContext } from 'react';
import type { ReactNode } from 'react';

const CardListContext = createContext<any | null>(null);

interface CardListContextProps {
  children: ReactNode;
}

function CardListProvider({ children }: CardListContextProps) {
  return <CardListContext.Provider value={'hello'}>{children}</CardListContext.Provider>;
}

export { CardListProvider, CardListContext };
