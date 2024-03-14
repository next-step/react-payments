import { REGEX } from '@/domain/constant';
import { validExpirationDate } from '@/domain/validate';
import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
import { ChangeEvent, useContext } from 'react';

const useCardExpirationDate = () => {
  const {
    cardState: { month, year },
    handleCardState,
  } = useContext(CardInfoContext);

  const handleExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!value) {
      handleCardState({ [name]: value });
      return;
    }

    if (name === 'month' && validExpirationDate(value)) {
      handleCardState({ [name]: value });
      return;
    }

    if (name === 'year') {
      if (!REGEX.test(value)) handleCardState({ [name]: value });
    }
  };
  return { month, year, handleChange: handleExpirationDate };
};

export default useCardExpirationDate;
