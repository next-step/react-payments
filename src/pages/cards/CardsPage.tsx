import { AddCardButton } from '@pages/cards/components';
import Cards from './components/Cards';

export default function CardsPage() {
	return (
		<div className="flex-column-center">
			<Cards />
			<AddCardButton />
		</div>
	);
}
