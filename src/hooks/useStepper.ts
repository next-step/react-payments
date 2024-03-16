import { StepperContext } from '@contexts';
import { useContext } from 'react';

export default function useStepper() {
	return useContext(StepperContext);
}
