import { AddCardButton, Cards } from '@pages/cards/components';
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
