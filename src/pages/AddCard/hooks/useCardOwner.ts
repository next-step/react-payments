import { useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardOwner = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleOwner = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      send({
        type: 'cardState.updateOwner',
        value: e.target.value,
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
