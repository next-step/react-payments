import React, { useMemo } from 'react';
import { CardContextProvider } from './context/CardContext';
import { useStepContext } from './context/StepContext';
import { CardDetail, CardEdit, CardList } from './pages';
import { PAYMENTS_STEP } from './domain/payments/constants';

function App() {
  const { step } = useStepContext();

  const content = useMemo(() => {
    switch (step) {
      case PAYMENTS_STEP.ADD:
      case PAYMENTS_STEP.EDIT:
        return <CardEdit />;
      case PAYMENTS_STEP.DONE:
        return <CardDetail step={PAYMENTS_STEP.DONE} />;
      case PAYMENTS_STEP.UPDATING_CARD_ALIAS:
        return <CardDetail step={PAYMENTS_STEP.UPDATING_CARD_ALIAS} />;
      case PAYMENTS_STEP.LIST:
      default:
        return <CardList />;
    }
  }, [step]);

  return <CardContextProvider>{content}</CardContextProvider>;
}

export default App;
