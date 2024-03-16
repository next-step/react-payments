import { AddCardButton } from '@pages/cards/components';
import Cards from './components/Cards';
import { Header } from '@components/layout';

export default function CardsPage() {
	return (
		<>
			<Header title="보유카드" />
			<div className="flex-column-center">
				<Cards />
				<AddCardButton />
			</div>
		</>
	);
}
