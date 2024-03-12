import { useState } from 'react';
import AddCardCompleted from './AddCardCompleted';
import AddCard from './AddCard';
import CardList from '../CardList';

const STEP = {
  INITIAL_STEP: '카드_입력',
  ADD_CARD: '카드_입력',
  ADD_CARD_COMPLETED: '카드_입력_완료',
  CARD_LIST: '카드_목록',
} as const;

type StepType = (typeof STEP)[keyof typeof STEP];

export default function Payments() {
  const [step, setStep] = useState<StepType>(STEP.INITIAL_STEP);

  return (
    <>
      {step === STEP.INITIAL_STEP && (
        <AddCard
          onPrevious={() => setStep(STEP.CARD_LIST)}
          onNext={() => setStep(STEP.ADD_CARD_COMPLETED)}
        />
      )}
      {step === STEP.ADD_CARD_COMPLETED && (
        <AddCardCompleted onNext={() => setStep(STEP.CARD_LIST)} />
      )}
      {step === STEP.CARD_LIST && (
        <CardList onNext={() => setStep(STEP.INITIAL_STEP)} />
      )}
    </>
  );
}
