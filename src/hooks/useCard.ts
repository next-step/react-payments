import { useCallback, useState } from 'react';
import { Formatter } from '../domain';
import { CardBoxType } from '../components/CardBox';

export default function useCard(initialState: CardBoxType) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState) => {
    const cardNumber = Formatter.cardNumber(newState.cardNumber);
    const expiredDate = Formatter.expiredDate(newState.expiredDate);

    setState({
      ...cardState,
      expiredDate,
      cardNumber,
    });
  }, []);

  return {
    cardState,
    setCardState,
  };
}