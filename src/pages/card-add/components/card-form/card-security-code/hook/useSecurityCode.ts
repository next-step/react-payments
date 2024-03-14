import { validNumber } from '@/domain/validate';
import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
import { ChangeEvent, useContext } from 'react';

const useSecurityCode = () => {
  const {
    cardState: { securityCode },
    handleCardState,
  } = useContext(CardInfoContext);

  const handleScurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (validNumber(value)) {
      handleCardState({ [name]: value });
    }
  };

  return { securityCode, handleScurityCode };
};

export default useSecurityCode;
