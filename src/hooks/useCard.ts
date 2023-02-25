import { useCallback, useState } from 'react';
import { ICardBox } from '../domain/types';
import { cardNumber as filterCardNumber, expiredDate as filterExpiredDate } from '../utils/filter';

export default function useCard(initialState: ICardBox = {}) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState: ICardBox) => {
    setState((prevState) => {
      let { cardNumber, expiredDate } = newState;

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

  return {
    cardState,
    setCardState
  };
}