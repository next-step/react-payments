import { FaChevronLeft } from 'react-icons/fa';
import Button from '@components/ui-kit/Button';
import { useStepper } from '@hooks';

export default function Header() {
	const { dispatch } = useStepper();

	const handleClick = () => {
		dispatch({ type: 'toCards' });
	};
	return (
		<header className="header">
			<Button onClick={handleClick}>
				<FaChevronLeft size={20} />
			</Button>
			<h1>카드등록</h1>
		</header>
	);
}
