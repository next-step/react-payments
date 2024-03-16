import { useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardNickname = () => {
  const { send } = CardContext.useActorRef();

  const handleNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      send({ type: 'cardState.updateNickname', value });
    },
    [send]
  );

  return {
    handleNickname,
  };
};

export default useCardNickname;
