import { PaymentCard } from '@components/domain';
import PaymentCardLabel from '@components/domain/PaymentCardLabel';
import { useCards, useStepper } from '@hooks';
import { useMemo } from 'react';

export default function Cards() {
	const cards = useCards();
	const sortedCards = useMemo(
		() => cards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
		[cards],
	);
	const { dispatch } = useStepper();
	const handleClick = () => {};
	return (
		<div>
			{sortedCards.map((card) => (
				<div key={card.id} className="flex-column-center mb-4">
					<PaymentCard
						variant="small-card"
						cardNumber={card.cardNumber}
						cardExpiredDate={card.cardExpiredDate}
						cardHolderName={card.cardHolderName}
					/>
					<PaymentCardLabel label={card.cardAlias} />
				</div>
			))}
		</div>
	);
}
