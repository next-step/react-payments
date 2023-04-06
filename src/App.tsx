import React from 'react';
import { PAYMENTS_STEP, useStepContext } from './context/StepContext';
import { CardDetail, CardEdit, CardList } from './pages';

function App() {
  const { step } = useStepContext();

  switch (step) {
    case PAYMENTS_STEP.ADD:
    case PAYMENTS_STEP.EDIT:
      return <CardEdit />;
    case PAYMENTS_STEP.DONE:
      return <CardDetail />;
    case PAYMENTS_STEP.LIST:
    default:
      return <CardList />;
  }
}

export default App;
