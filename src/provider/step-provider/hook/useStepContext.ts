import { useContext } from 'react';
import { StepContext } from '../StepProvider';

const useStepContext = () => {
  const stepContext = useContext(StepContext);
  if (!stepContext) {
    throw new Error('해당 Context는 StepProvider 하위에서만 사용해주세요!');
  }

  return stepContext;
};

export default useStepContext;
