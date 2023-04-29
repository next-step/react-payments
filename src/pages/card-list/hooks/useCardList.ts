import { useCallback } from 'react';
import { useCardContext } from '../../../context/CardContext';
import { useStepContext } from '../../../context/StepContext';
import { PAYMENTS_STEP } from '../../../domain/payments/constants';
import { ICard } from '../../../domain/payments/types';

const useCardList = () => {
  const { setStep } = useStepContext();
  const { setCard } = useCardContext();

  const addCard = useCallback(() => {
    setStep?.(PAYMENTS_STEP.ADD);
  }, [setStep]);

  const updateCard = useCallback(
    (card: ICard) => {
      setCard?.(card);
      setStep?.(PAYMENTS_STEP.UPDATING_CARD_ALIAS);
    },
    [setStep]
  );

  return { addCard, updateCard };
};

export default useCardList;
