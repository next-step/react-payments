import AddCardForm from 'src/components/AddCardForm.tsx';
import { AddCardStep } from 'src/page/AddCard.tsx';
import CardList from 'src/components/CardList.tsx';
import AddCardFinish from 'src/components/AddCardFinish.tsx';

interface AddCardStepperProps {
	activeStep: AddCardStep;
	changeActiveStep: (step: AddCardStep) => void;
}

export default function AddCardStepper({ activeStep, changeActiveStep }: AddCardStepperProps) {
	switch (activeStep) {
		case 'list':
			return <CardList onClickAddCard={() => changeActiveStep('form')} />;
		case 'form':
			return <AddCardForm onClickBack={() => changeActiveStep('list')} onSubmit={() => changeActiveStep('finish')} />;
		case 'finish':
			return <AddCardFinish />;
		default:
			throw new Error('Invalid step');
	}
}
