import {CARD_PASSWORD_LIMIT} from '@/domain/constant';
import {validCardPassword} from '@/domain/validate';
import useInputFocus from '@/pages/card-add/hook/useInputFocus';
import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import {type ChangeEvent} from 'react';

const REF_SIZE = 1;
const useCardPassword = () => {
  const {
    cardState: {firstCardPassword, secondCardPassword},
    handleCardState,
  } = useCardContext();

  const {inputRef} = useInputFocus(REF_SIZE);
  const [second] = inputRef;
  const handleCardPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (validCardPassword(value)) {
      handleCardState({[name]: value});
      if (name === 'firstCardPassword' && value.length === CARD_PASSWORD_LIMIT) {
        second.current?.focus();
      }
    }
  };

  return {
    inputRef, firstCardPassword, secondCardPassword, handleChange: handleCardPassword,
  };
};

export default useCardPassword;
