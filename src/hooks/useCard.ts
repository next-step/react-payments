import { useCallback, useState } from 'react';
import { CardBoxType } from '../components/CardBox';

export default function useCard(initialState: CardBoxType) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState) => {
    setState({
      ...newState,
    });
  }, []);

  return {
    cardState,
    setCardState,
  };
}