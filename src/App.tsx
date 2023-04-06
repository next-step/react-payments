import React from 'react';
import { CardContextProvider } from './context/CardContext';
import { PAYMENTS_STEP, useStepContext } from './context/StepContext';
import { CardDetail, CardEdit, CardList } from './pages';

function App() {
  const { step } = useStepContext();

  switch (step) {
    case PAYMENTS_STEP.ADD:
    case PAYMENTS_STEP.EDIT:
      return (
        <CardContextProvider>
          <CardEdit />
        </CardContextProvider>
      );
    case PAYMENTS_STEP.DONE:
      return (
        <CardContextProvider>
          <CardDetail />
        </CardContextProvider>
      );
    case PAYMENTS_STEP.LIST:
    default:
      return <CardList />;
  }
}

export default App;
