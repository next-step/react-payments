import React, { useContext } from 'react';
import { StepContext } from './StepProvider';

const useStepContext = () => {
  return useContext(StepContext);
};

export default useStepContext;
