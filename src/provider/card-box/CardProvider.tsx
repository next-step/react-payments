import { ICardDTO } from '../../domain/types';
import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import cardReducer, { ICardReducer } from './cardReducer';

export const CardStateContext = createContext<ICardDTO>({});
export const CardDispatchContext = createContext<Dispatch<ICardReducer>>(() => {
});

export default function CardProvider({ children }: PropsWithChildren) {
  const [cardState, dispatch] = useReducer(cardReducer, {});

  return (
    <CardStateContext.Provider value={cardState}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}
