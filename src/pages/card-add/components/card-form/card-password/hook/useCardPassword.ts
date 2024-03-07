import { validCardPassword } from '@/domain/validate';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext } from 'react';

const useCardPassword = () => {
  const {
    cardState: { firstCardPassword, secondCardPassword },
    handleCardState,
  } = useContext(CardInfoContext);
  const handleCardPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (validCardPassword(value)) {
      handleCardState({ [name]: value });
    }
  };
  return { firstCardPassword, secondCardPassword, handleChange: handleCardPassword };
};

export default useCardPassword;
