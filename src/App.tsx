import React from 'react';
import { CardContextProvider } from './context/CardContext';
import { useStepContext } from './context/StepContext';
import { CardDetail, CardEdit, CardList } from './pages';
import { PAYMENTS_STEP } from './constants';

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
          <CardDetail step={PAYMENTS_STEP.DONE} />
        </CardContextProvider>
      );
    case PAYMENTS_STEP.UPDATING_CARD_ALIAS:
      return (
        <CardContextProvider>
          <CardDetail step={PAYMENTS_STEP.UPDATING_CARD_ALIAS} />
        </CardContextProvider>
      );
    case PAYMENTS_STEP.LIST:
    default:
      return (
        <CardContextProvider>
          <CardList />
        </CardContextProvider>
      );
  }
}

export default App;
