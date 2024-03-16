import { CARD_NUMBER_LIMIT } from '@/domain/constant';
import { validCardNumber } from '@/domain/validate';
import useInputFocus from '@/pages/card-add/hook/useInputFocus';
import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import { ChangeEvent } from 'react';

const REF_SIZE = 3;
const useNumbers = ({ nextFocus }: { nextFocus: any }) => {
  const {
    cardState: { cardNumbers },
    handleCardState,
  } = useCardContext();

  const { inputRef } = useInputFocus(REF_SIZE);
  const [second, third, fourth] = inputRef;

  const handleCardNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (validCardNumber(value)) {
      handleCardState({ cardNumbers: { ...cardNumbers, [name]: value } });

      if (name === 'first' && value.length === CARD_NUMBER_LIMIT) {
        second.current?.focus();
      }
      if (name === 'second' && value.length === CARD_NUMBER_LIMIT) {
        third.current?.focus();
      }
      if (name === 'third' && value.length === CARD_NUMBER_LIMIT) {
        fourth.current?.focus();
      }
      if (name === 'fourth' && value.length === CARD_NUMBER_LIMIT) {
        nextFocus.current.focus();
      }
    }
  };

  return { inputRef, cardNumbers, handleChange: handleCardNumbers };
};

export default useNumbers;
