import { PaymentCard } from '@components/domain';
import { useCards } from '@hooks';
import { useMemo } from 'react';

export default function Cards() {
	const cards = useCards();
	const sortedCards = useMemo(
		() => cards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
		[cards],
	);
	return (
		<div>
			{sortedCards.map((card) => (
				<div key={card.id}>
					<PaymentCard
						variant="small-card"
						cardNumber={card.cardNumber}
						cardExpiredDate={card.cardExpiredDate}
						cardHolderName={card.cardHolderName}
					/>
				</div>
			))}
		</div>
	);
}
