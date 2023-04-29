import React, { useCallback } from 'react';
import { TCardEditProperties, TCardEditRefs } from '../types';
import { PAYMENTS_STEP } from '../../../domain/payments/constants';
import { ICardType } from '../../../domain/payments/types';
import { useStepContext } from '../../../context/StepContext';
import { useCardContext } from '../../../context/CardContext';
import { saveCard } from '../../../services/cardStorage';

export type THookHandler = TCardEditProperties &
  TCardEditRefs & {
    isValid: boolean;
  };

const useCardEditHandlers = ({
  cardNumbers: { value: cardNumbers, set: setCardNumbers },
  expiredMonth: { value: expiredMonth, set: setExpiredMonth },
  expiredYear: { value: expiredYear, set: setExpiredYear },
  owner: { value: owner },
  cvc: { value: cvc },
  pin: { value: pin },
  cardTypeSelected: { set: setCardTypeSelected },
  isValid,
  refs,
}: THookHandler) => {
  const inputs = [cardNumbers, expiredMonth, expiredYear, owner, cvc, pin];

  const { setStep } = useStepContext();
  const { card, setCard } = useCardContext();

  const handleExpired = useCallback(([expiredMonth, expiredYear]: string[]) => {
    setExpiredMonth(expiredMonth);
    setExpiredYear(expiredYear);
    return;
  }, []);

  const handleBackStep = useCallback(() => {
    setStep?.(PAYMENTS_STEP.LIST);
  }, [setStep]);

  const handleSelectedCardType = useCallback(
    (cardType?: ICardType) => {
      setCardTypeSelected(true);
      if (!cardType) {
        return;
      }

      const { name, numberPrefix } = cardType;
      setCard?.({
        name,
        owner,
        numbers: cardNumbers,
        expiredMonth,
        expiredYear,
        pin,
        cvc,
      });

      setCardNumbers((cardNumbers: string[]) => [...numberPrefix, ...cardNumbers.slice(2)]);
    },
    [...inputs]
  );

  const handleEnrollStep = useCallback(
    (event: React.FormEvent) => {
      if (!isValid) {
        event.preventDefault();
        return;
      }

      const savedCard = saveCard({
        name: card?.name,
        owner,
        numbers: cardNumbers,
        expiredMonth,
        expiredYear,
        pin,
        cvc,
      });

      setCard?.(savedCard);
      setStep?.(PAYMENTS_STEP.DONE);
    },
    [setStep, ...inputs, refs]
  );

  const handleCardNumbers = (numbers: string[]) => {
    setCardNumbers(numbers);
  };

  return { handleExpired, handleBackStep, handleSelectedCardType, handleEnrollStep, handleCardNumbers };
};

export default useCardEditHandlers;
