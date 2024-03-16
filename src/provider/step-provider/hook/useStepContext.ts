import { useContext } from 'react';
import { StepContext } from '../StepProvider';

const useStepContext = () => {
  const stepContext = useContext(StepContext);
  if (!stepContext) {
    throw new Error('라우터 컨텍스트 입니다!');
  }
  return stepContext;
};

export default useStepContext;
