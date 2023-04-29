import { useRef, useState } from 'react';
import { TCardEditProperties, TCardEditRefs } from '../types';
import useCardEditHandlers from './useCardEditHandlers';
import useCardEditValidators from './useCardEditValidators';

const useCardEdit = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [pin, setPin] = useState('');
  const [cardTypeSelected, setCardTypeSelected] = useState(false);

  const refs = {
    cardNumber: useRef<HTMLInputElement>(null),
    expired: useRef<HTMLInputElement>(null),
    owner: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
    pin: useRef<HTMLInputElement>(null),
    nextButton: useRef<HTMLButtonElement>(null),
  };

  const cardEditStates = {
    cardNumbers: { value: cardNumbers, set: setCardNumbers },
    expiredMonth: { value: expiredMonth, set: setExpiredMonth },
    expiredYear: { value: expiredYear, set: setExpiredYear },
    owner: { value: owner, set: setOwner },
    cvc: { value: cvc, set: setCvc },
    pin: { value: pin, set: setPin },
    cardTypeSelected: { value: cardTypeSelected, set: setCardTypeSelected },
    refs,
  } as TCardEditProperties & TCardEditRefs; // 명시

  // hooks
  const { isValid, getValidationCaption } = useCardEditValidators(cardEditStates);
  const { handleExpired, handleBackStep, handleSelectedCardType, handleEnrollStep, handleCardNumbers } =
    useCardEditHandlers({
      ...cardEditStates,
      isValid,
    });

  return {
    cardEditStates,
    validators: {
      isValid,
      getValidationCaption,
    },
    handlers: {
      handleExpired,
      handleBackStep,
      handleSelectedCardType,
      handleEnrollStep,
      handleCardNumbers,
    },
  };
};

export default useCardEdit;
