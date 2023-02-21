import { createContext, useContext, useState } from 'react';

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState(null);

  //TODO: 닉네임 상태관리

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
};

export function useCard() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Need to be within CardContext to use useCard.');
  }

  return context;
}
