import { ReactElement } from 'react';

import AddCardForm from 'src/components/AddCardForm.tsx';

interface AddCardStepperProps {
	activeStep: 'list' | 'form' | 'finish';
	changeActiveStep: (step: 'list' | 'form' | 'finish') => void;
}

export default function AddCardStepper({ activeStep, changeActiveStep }: AddCardStepperProps) {
	const stepLookup: Record<typeof activeStep, ReactElement> = {
		list: (
			<div>
				<h2 className="page-title mb-10">보유 카드</h2>
				<button onClick={() => changeActiveStep('form')}>카드 추가하기</button>
			</div>
		),
		form: <AddCardForm onClickBack={() => changeActiveStep('list')} onSubmit={() => changeActiveStep('finish')} />,
		finish: <div>finish</div>,
	};

	return stepLookup[activeStep];
}
