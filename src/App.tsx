import { useState } from 'react';
import { STEP } from './constant';
import CardList from './pages/CardList';
import CardRegistration from './pages/CardRegistration';
import CardRegistrationFinish from './pages/CardRegistrationFinish';

type Step = keyof typeof STEP;

export default function App() {
  const [step, setStep] = useState<Step>(STEP.카드등록);

  return (
    <div className="root">
      {step === STEP.카드목록 && <CardList />}
      {step === STEP.카드등록 && <CardRegistration onClickBack={() => setStep(STEP.카드목록)} onClickNext={() => setStep(STEP.카드등록완료)} />}
      {step === STEP.카드등록완료 && <CardRegistrationFinish />}
    </div>
  );
}
