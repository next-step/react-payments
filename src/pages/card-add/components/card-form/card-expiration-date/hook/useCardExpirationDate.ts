import { CARD_EXPIRATION_DATE_LIMIT, REGEX } from '@/domain/constant';
import { validExpirationDate } from '@/domain/validate';
import useInputFocus from '@/pages/card-add/hook/useInputFocus';
import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import { type ChangeEvent } from 'react';

const REF_SIZE = 1;
const useCardExpirationDate = ({ nextFocus }: { nextFocus: any }) => {
  const {
    cardState: { month, year },
    handleCardState,
  } = useCardContext();
  const { inputRef } = useInputFocus(REF_SIZE);
  const [yearRef] = inputRef;
  const handleExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!value) {
      handleCardState({ [name]: value });
      return;
    }

    if (name === 'month' && validExpirationDate(value)) {
      handleCardState({ [name]: value });
      if (value.length === CARD_EXPIRATION_DATE_LIMIT) {
        yearRef.current?.focus();
      }

      return;
    }

    if (name === 'year') {
      if (!REGEX.test(value)) {
        handleCardState({ [name]: value });
      }

      if (value.length === CARD_EXPIRATION_DATE_LIMIT) {
        nextFocus.current.focus();
      }
    }
  };

  return {
    inputRef,
    month,
    year,
    handleChange: handleExpirationDate,
  };
};

export default useCardExpirationDate;
