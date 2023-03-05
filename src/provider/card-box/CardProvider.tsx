import { ICardDTO } from '../../domain/types';
import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { filterCardNumber, filterExpiredDate } from '../../utils/filter';

export interface ICardContext {
  cardState: ICardDTO;
  setCardState: (newState: ICardDTO) => void;
}

const initialContext: ICardContext = {
  cardState: {},
  setCardState: () => null,
};

export const CardContext = createContext(initialContext);

export default function CardProvider({ children }: PropsWithChildren) {
  const [cardState, setState] = useState<ICardDTO>({});

  const setCardState = useCallback((newState: ICardDTO) => {
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
    <CardContext.Provider value={contextValue}>
      {children}
    </CardContext.Provider>
  );
}
