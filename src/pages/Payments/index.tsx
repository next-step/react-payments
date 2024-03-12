import { useState } from 'react';
import AddCardCompleted from './AddCardCompleted';
import AddCard from './AddCard';
import CardList from '../CardList';

export default function Payments() {
  const [step, setStep] = useState('카드_입력');

  return (
    <>
      {step === '카드_입력' && (
        <AddCard
          onPrevious={() => setStep('카드_목록')}
          onNext={() => setStep('카드_입력_완료')}
        />
      )}
      {step === '카드_입력_완료' && (
        <AddCardCompleted onNext={() => setStep('카드_목록')} />
      )}
      {step === '카드_목록' && (
        <CardList onFirstStep={() => setStep('카드_입력')} />
      )}
    </>
  );
}
