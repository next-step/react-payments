import { PaymentCard } from '@components/domain';
import PaymentCardLabel from '@components/domain/PaymentCardLabel';
import { useCards, useStepper } from '@hooks';
import { PaymentCardType } from '@types';
import { useCallback, useMemo } from 'react';

export default function Cards() {
	const cards = useCards();
	const sortedCards = useMemo(
		() => cards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
		[cards],
	);
	const { dispatch } = useStepper();
	const handleClick = useCallback(
		(card: PaymentCardType) => () => {
			dispatch({ type: 'toEditCardAlias', payload: card });
		},
		[dispatch],
	);
	return (
		<div>
			{sortedCards.map((card) => (
				<div key={card.id} className="flex-column-center mb-4">
					<button className="button" onClick={handleClick(card)}>
						<PaymentCard
							variant="small-card"
							cardNumber={card.cardNumber}
							cardExpiredDate={card.cardExpiredDate}
							cardHolderName={card.cardHolderName}
						/>
						<PaymentCardLabel label={card.cardAlias} />
					</button>
				</div>
			))}
		</div>
	);
}
