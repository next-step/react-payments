import { PaymentCard, PaymentCardLabel } from '@components/domain';
import { Button } from '@components/ui-kit';
import { useCards, useSetCards, useStepper } from '@hooks';
import { PaymentCardType } from '@types';
import { useCallback, useMemo } from 'react';
import DeleteCardButton from './DeleteCardButton';

export default function Cards() {
	const cards = useCards();
	const sortedCards = useMemo(
		() => cards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
		[cards],
	);
	const { dispatch } = useStepper();
	const handleCardClick = useCallback(
		(card: PaymentCardType) => () => {
			dispatch({ type: 'toEditCardAlias', payload: card });
		},
		[dispatch],
	);

	const setCards = useSetCards();
	const handleDeleteClick = useCallback(
		(id: string) => () => {
			setCards((prev) => prev.filter((card) => card.id !== id));
		},
		[setCards],
	);
	return (
		<div>
			{sortedCards.map((card) => (
				<div key={card.id} className="flex-column-center mb-4 relative">
					<Button onClick={handleCardClick(card)}>
						<PaymentCard
							variant="small-card"
							cardNumber={card.cardNumber}
							cardExpiredDate={card.cardExpiredDate}
							cardHolderName={card.cardHolderName}
						/>
					</Button>
					<PaymentCardLabel label={card.cardAlias} />
					<DeleteCardButton onClick={handleDeleteClick(card.id)} />
				</div>
			))}
		</div>
	);
}
