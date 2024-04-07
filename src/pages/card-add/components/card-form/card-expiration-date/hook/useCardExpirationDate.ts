import { type RefObject, type ChangeEvent } from 'react';

import { isValidExpirationDate } from '@/domain/validate';
import { CARD_EXPIRATION_DATE_LIMIT, REGEX } from '@/domain/constant';

import useInputFocus from '@/pages/card-add/hook/useInputFocus';
import useCardContext from '@/provider/card-info-provider/hooks/useCardContext';

const REF_SIZE = 1;

type UseCardExpirationDate = {
  nextFocus: RefObject<HTMLInputElement>;
};

const useCardExpirationDate = ({ nextFocus }: UseCardExpirationDate) => {
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

    if (name === 'month' && isValidExpirationDate(value)) {
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
        nextFocus?.current?.focus();
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
