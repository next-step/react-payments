import { ChangeEvent, useCallback } from 'react';
import { CardContext } from '../../../App';

const CARD_NUMBER_MAX_LENGTH = 4;

const useCardNumber = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleNumbers = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > CARD_NUMBER_MAX_LENGTH) return;

      send({
        type: 'UPDATE_CARD_NUMBER',
        payload: {
          key: 'numbers',
          value: { ...cardState.numbers, [name]: value },
        },
      });
    },
    [cardState.numbers, send]
  );

  return {
    cardNumber: cardState.numbers,
    handleNumbers,
  };
};

export default useCardNumber;
