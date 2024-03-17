import { ChangeEvent, useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardNickname = () => {
  const { nickname } = CardContext.useSelector(
    ({ context }) => context.cardState
  );
  const { send } = CardContext.useActorRef();

  const handleNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      send({ type: 'UPDATE_NICKNAME', value });
    },
    [send]
  );

  return {
    nickname,
    handleNickname,
  };
};

export default useCardNickname;
