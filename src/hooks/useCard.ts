import { useCallback, useState } from 'react';
import { CardBoxType } from '../domain/types';
import { cardNumber as filterCardNumber, expiredDate as filterExpiredDate } from '../utils/filter';

export default function useCard(initialState: CardBoxType = {}) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState: CardBoxType) => {
    setState((prevState) => {
      let { cardNumber, expiredDate } = newState;

      cardNumber = cardNumber ? filterCardNumber(cardNumber) : prevState.cardNumber;
      expiredDate = expiredDate ? filterExpiredDate(expiredDate) : prevState.expiredDate;

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