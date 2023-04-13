import React, { useCallback } from 'react';
import { TCardEditProperties, TCardEditRefs, TCardEditSetters } from '../types';
import { PAYMENTS_STEP } from '../../../constants';
import { ICardType } from '../../../domain/payments/types';
import { useStepContext } from '../../../context/StepContext';
import { useCardContext } from '../../../context/CardContext';

export type THookHandler = TCardEditProperties &
  TCardEditSetters &
  TCardEditRefs & {
    cardTypeSelected?: boolean;
    setCardTypeSelected: React.Dispatch<React.SetStateAction<boolean>>;
    isValid: boolean;
  };

export default ({
  cardNumbers,
  setCardNumbers,
  expiredYear,
  setExpiredYear,
  expiredMonth,
  setExpiredMonth,
  owner,
  cvc,
  pin,
  setCardTypeSelected,
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

      const { cardName, cardNumberPrefix } = cardType;
      setCard?.({
        name: cardName,
        owner,
        numbers: cardNumbers,
        expiredMonth,
        expiredYear,
        pin,
        cvc,
      });

      setCardNumbers((cardNumbers: string[]) => [...cardNumberPrefix, ...cardNumbers.slice(2)]);
    },
    [...inputs]
  );

  const handleEnrollStep = useCallback(
    (event: React.FormEvent) => {
      if (!isValid) {
        event.preventDefault();
        return;
      }

      setCard?.({
        name: card?.name,
        owner,
        numbers: cardNumbers,
        expiredMonth,
        expiredYear,
        pin,
        cvc,
      });
      setStep?.(PAYMENTS_STEP.DONE);
    },
    [setStep, ...inputs, refs]
  );

  const handleCardNumbers = (numbers: string[]) => {
    setCardNumbers(numbers);
  };

  return { handleExpired, handleBackStep, handleSelectedCardType, handleEnrollStep, handleCardNumbers };
};
