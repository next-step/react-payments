import { useCallback, useState } from 'react';
import { Formatter } from '../domain';

type CardState = string[];

export default function useCard(initialState: string) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState: CardState) => {
    const cardNumber = Formatter.formatCardNumber(newState);

    setState(cardNumber);
  }, []);

  return {
    cardState,
    setCardState,
  };
}