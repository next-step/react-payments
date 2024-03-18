import { Header } from '@components/layout';
import { Button } from '@components/ui-kit';
import { useStepper } from '@hooks';
import { AddCardForm } from '@pages/addCard/components';
import { FaChevronLeft } from 'react-icons/fa';
export default function AddCardPage() {
	const { dispatch } = useStepper();

	const handleClick = () => {
		dispatch({ type: 'toCards' });
	};
	return (
		<>
			<Header title="카드등록">
				<Button onClick={handleClick}>
					<FaChevronLeft size={16} />
				</Button>
			</Header>
			<AddCardForm />
		</>
	);
}
