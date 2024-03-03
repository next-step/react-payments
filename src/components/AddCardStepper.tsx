import { useState, ReactElement } from 'react';

import AddCardForm from 'src/components/AddCardForm.tsx';

export default function AddCardStepper() {
	const [activeStep, setActiveStep] = useState<'list' | 'form' | 'finish'>('list');

	const stepLookup: Record<typeof activeStep, ReactElement> = {
		list: (
			<div>
				<h2 className="page-title mb-10">보유 카드</h2>
				<button onClick={() => setActiveStep('form')}>카드 추가하기</button>
			</div>
		),
		form: <AddCardForm onClickBack={() => setActiveStep('list')} onSubmit={() => setActiveStep('finish')} />,
		finish: <div>finish</div>,
	};

	return stepLookup[activeStep];
}
