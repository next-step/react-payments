import { AddCardButton } from '@pages/cards/components';
import Cards from './components/Cards';
import { Header } from '@components/layout';

export default function CardsPage() {
	return (
		<>
			<Header title="보유카드" />
			<div className="cards">
				<div className="flex-column-center">
					<AddCardButton />
					<Cards />
				</div>
			</div>
		</>
	);
}
