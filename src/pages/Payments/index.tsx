import { useState } from 'react';
import AddCardCompleted from './AddCardCompleted';
import AddCard from './AddCard';
import CardList from '../CardList';

// 전체 Payments Steps
// const steps = ['카드_입력', '카드_입력_완료', '카드_목록'];

export default function Payments() {
  const [step, setStep] = useState('카드_입력');

  return (
    <>
      {step === '카드_입력' && (
        <AddCard
          onNext={() => setStep('카드_입력_완료')}
          onPrevious={() => setStep('카드_목록')}
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
