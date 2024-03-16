import {useContext} from 'react';
import {StepContext} from './StepProvider';

const useStepContext = () => useContext(StepContext);

export default useStepContext;
