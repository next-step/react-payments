import { useState } from 'react';
import '../styles/index.css';
import AddCard from './components/templates/AddCard';
import CardList from './components/templates/CardList';
import SaveCard from './components/templates/SaveCard';

const firstStep = 0;
const lastStep = 2;

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState();
  const goToPreviousStep = () => {
    if (step - 1 < firstStep) {
      return;
    }
    setStep(step - 1);
  };

  const goToNextStep = (stepData) => {
    if (step + 1 > lastStep) {
      return;
    }
    setData(stepData);
    setStep(step + 1);
  };

  return (
    <div className="root">
      {step === 0 ? <CardList goToNextStep={goToNextStep} /> : null}
      {step === 1 ? (
        <AddCard
          goToPreviousStep={goToPreviousStep}
          goToNextStep={goToNextStep}
        />
      ) : null}
      {step === 2 ? <SaveCard data={data} /> : null}
    </div>
  );
}

export default App;
