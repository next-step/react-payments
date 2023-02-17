import { useCallback, useState } from 'react';
import { Filter } from '../domain';
import { CardBoxType } from '../components/CardBox';

export default function useCard(initialState: CardBoxType) {
  const [cardState, setState] = useState(initialState);

  const setCardState = useCallback((newState) => {
    const cardNumber = Filter.cardNumber(newState.cardNumber);
    const expiredDate = Filter.expiredDate(newState.expiredDate);

    setState({
      ...newState,
      expiredDate,
      cardNumber,
    });
  }, []);

  return {
    cardState,
    setCardState,
  };
}