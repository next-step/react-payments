import { useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardOwner = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleOwner = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      send({
        type: 'UPDATE_OWNER',
        payload: { key: 'owner', value },
      });
    },
    [send]
  );

  return {
    owner: cardState.owner,
    handleOwner,
  };
};

export default useCardOwner;
