import { ICardBoxDTO } from '../../domain/types';
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { filterCardNumber, filterExpiredDate } from '../../utils/filter';

export interface ICardBoxContext {
  cardState: ICardBoxDTO;
  setCardState: (newState: ICardBoxDTO) => void;
}

const initialContext: ICardBoxContext = {
  cardState: {},
  setCardState: () => null,
};

export const CardBoxContext = createContext(initialContext);

export default function CardBoxProvider({ children }: { children: ReactNode }) {
  const [cardState, setState] = useState<ICardBoxDTO>({});

  const setCardState = useCallback((newState: ICardBoxDTO) => {
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