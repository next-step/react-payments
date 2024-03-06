import { useState } from 'react';

import AddCardStepper from 'src/components/AddCardStepper.tsx';

export type AddCardStep = 'list' | 'form' | 'finish';

export default function AddCard() {
	const [activeStep, setActiveStep] = useState<AddCardStep>('list');

	const changeActiveStep = (step: AddCardStep) => {
		setActiveStep(step);
	};

	return <AddCardStepper activeStep={activeStep} changeActiveStep={changeActiveStep} />;
}
