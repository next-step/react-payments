import { useState } from 'react';
import { STEP } from './constant';
import CardList from './pages/CardList';
import CardRegistration from './pages/CardRegistration';
import CardRegistrationFinish from './pages/CardRegistrationFinish';

type Step = '카드등록' | '카드등록완료' | '카드목록';

export default function App() {
  const [step, setStep] = useState<Step>('카드등록');
  return (
    <>
      <div className="root">
        {step === STEP.카드목록 && <CardList />}
        {step === STEP.카드등록 && <CardRegistration onClickBack={() => setStep('카드목록')} onClickNext={() => setStep('카드등록완료')} />}
        {step === STEP.카드등록완료 && <CardRegistrationFinish />}
      </div>
    </>
  );
}
