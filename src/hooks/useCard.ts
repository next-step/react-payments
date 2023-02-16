import { useCallback, useState } from 'react';
import { Formatter } from '../domain';

export default function useCard(initialState: string) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState: string[]) => {
    const cardNumber = Formatter.formatCardNumber(newState);


    setState(cardNumber);
  }, []);

  return {
    cardState,
    setCardState,
  };
}