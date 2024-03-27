import { useContext } from 'react';

import { StepperContext } from '../../context/StepperProvider';

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('Cannot find StepperContext');
  }

  return context;
};
