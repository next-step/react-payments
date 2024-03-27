import AddCardForm from './components/card-add/AddCardForm';
import CompletedCard from './components/card-complete/CompletedCardForm';
import CardList from './components/card-list/CardList';

import CardsProvider from './context/CardsProvider';
import StepperProvider from './context/StepperProvider';
import useStepper from './components/hooks/useStepper';

function Stepper() {
  const { currentStep, goNextStep, goPrevStep } = useStepper();

  return (
    <div>
      <h2>현재 스텝: {currentStep}</h2>
      <button onClick={goPrevStep}>이전</button>
      <button onClick={goNextStep}>다음</button>
    </div>
  );
}

export default function App() {
  return (
    <CardsProvider>
      <StepperProvider>
        <Stepper />
      </StepperProvider>
    </CardsProvider>
  );
}
