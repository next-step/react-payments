import { ICardBox } from '../../domain/types';
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { cardNumber as filterCardNumber, expiredDate as filterExpiredDate } from '../../utils/filter';

export interface ICardBoxContext {
  cardState: ICardBox;
  setCardState: (newState: ICardBox) => void;
}

const initialContext: ICardBoxContext = {
  cardState: {},
  setCardState: () => null,
};

export const CardBoxContext = createContext(initialContext);

export default function CardBoxProvider({ children }: { children: ReactNode }) {
  const [cardState, setState] = useState<ICardBox>({});

  const setCardState = useCallback((newState: ICardBox) => {
    let { cardNumber, expiredDate } = newState;

    setState((prevState) => {
      cardNumber = filterCardNumber(cardNumber || prevState.cardNumber);
      expiredDate = filterExpiredDate(expiredDate || prevState.expiredDate);

      return {
        ...prevState,
        ...newState,
        cardNumber,
        expiredDate
      };
    });
  }, []);

  const contextValue = useMemo(() => ({
    cardState,
    setCardState
  }), [cardState]);

  return (
    <CardBoxContext.Provider value={contextValue}>
      {children}
    </CardBoxContext.Provider>
  );
}