import { useCallback } from 'react';
import { CardContext } from '../../../App';

const PASSWORD_INPUT_MAX_LENGTH = 1;

const useCardPassword = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > PASSWORD_INPUT_MAX_LENGTH) return;

      send({
        type: 'UPDATE_PASSWORD',
        value: { ...cardState.password, [name]: value },
      });
    },
    [cardState.password, send]
  );

  return {
    password: cardState.password,
    handlePassword,
  };
};

export default useCardPassword;
