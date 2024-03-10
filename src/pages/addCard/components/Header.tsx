import { FaChevronLeft } from 'react-icons/fa';
import Button from '@components/ui-kit/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
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
