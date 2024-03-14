import { validCardNumber } from '@/domain/validate';
import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
import { ChangeEvent, useContext } from 'react';

const useNumbers = () => {
  const {
    cardState: { cardNumbers },
    handleCardState,
  } = useContext(CardInfoContext);

  const handleCardNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (validCardNumber(value)) {
      handleCardState({ cardNumbers: { ...cardNumbers, [name]: value } });
    }
  };

  return { cardNumbers, handleChange: handleCardNumbers };
};

export default useNumbers;
