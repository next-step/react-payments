import { Button, Card } from '@components/ui-kit';
import { useStepper } from '@contexts/StepperContext';
import { FaPlus } from 'react-icons/fa';

export default function AddCardButton() {
	const { dispatch } = useStepper();

	const handleClick = () => {
		dispatch({ type: 'toAddCard' });
	};
	return (
		<Button onClick={handleClick}>
			<Card variant="empty-card">
				<FaPlus />
			</Card>
		</Button>
	);
}
