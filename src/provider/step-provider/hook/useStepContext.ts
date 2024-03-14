import { useContext } from 'react';
import { StepContext } from '../StepProvider';

const useStepContext = () => {
  const stepContext = useContext(StepContext);
  if (!stepContext) {
    return null;
  }
  return stepContext;
};

export default useStepContext;
