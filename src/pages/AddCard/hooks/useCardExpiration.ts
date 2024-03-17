import { useCallback } from 'react';
import { CardContext } from '../../../App';

const EXPIRATION_MAX_LENGTH = 2;
const MAX_MONTH = 12;

const useCardExpiration = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleExpirationDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > EXPIRATION_MAX_LENGTH) return;
      if (name === 'month' && Number(value) > MAX_MONTH) return;

      send({
        type: 'UPDATE_EXPIRATION_DATE',
        value: { ...cardState.expiration, [name]: value },
      });
    },
    [cardState.expiration, send]
  );

  return {
    expiration: cardState.expiration,
    handleExpirationDate,
  };
};

export default useCardExpiration;
