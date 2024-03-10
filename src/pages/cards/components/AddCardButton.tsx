import { Button, Card } from '@components/ui-kit';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AddCardButton() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/register');
	};
	return (
		<Button onClick={handleClick}>
			<Card variant="empty-card">
				<FaPlus />
			</Card>
		</Button>
	);
}
