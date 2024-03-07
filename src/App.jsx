import { useState } from 'react';
import '../styles/index.css';
import { FIRST_STEP, LAST_STEP } from './constants/constraints';
import { Router } from './route/Router';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState();
  const goToPreviousStep = () => {
    if (step - 1 < FIRST_STEP) {
      return;
    }
    setStep(step - 1);
  };

  const goToNextStep = (stepData) => {
    if (step + 1 > LAST_STEP) {
      return;
    }
    setData(stepData);
    setStep(step + 1);
  };

  return (
    <div className="root">
      <Router
        step={step}
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
        data={data}
      />
    </div>
  );
}

export default App;
