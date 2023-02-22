import { useCallback, useState } from 'react';
import { CardBoxType } from '../domain/types';

export default function useCard(initialState: CardBoxType) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState: CardBoxType) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...newState,
      };
    });
  }, []);

  return {
    cardState,
    setCardState,
  };
}