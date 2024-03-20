import { useCallback } from 'react';
import { CardContext } from '../../../App';

const SECURITY_CODE_MAX_LENGTH = 3;

const useCardSecurityCode = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleSecurityCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > SECURITY_CODE_MAX_LENGTH) return;

      send({
        type: 'UPDATE_SECURITY_CODE',
        payload: { key: 'securityCode', value },
      });
    },
    [send]
  );

  return {
    securityCode: cardState.securityCode,
    handleSecurityCode,
  };
};

export default useCardSecurityCode;
