import { Card, CardProps } from '@components/ui-kit';
import { useDisplayedCard } from '@hooks';
import { useMemo } from 'react';

interface PaymentCardProps {
	variant: CardProps['variant'];
	cardNumber: string;
	cardExpiredDate: string;
	cardHolderName: string;
}

export default function PaymentCard({
	variant,
	cardNumber,
	cardExpiredDate,
	cardHolderName,
}: PaymentCardProps) {
	const { toDisplayedCardExpiredDate, toDisplayedCardNumber } =
		useDisplayedCard();
	const displayedCardNumber = useMemo(
		() => toDisplayedCardNumber(cardNumber),
		[cardNumber, toDisplayedCardNumber],
	);
	const displayedCardExpiredDate = useMemo(
		() => toDisplayedCardExpiredDate(cardExpiredDate),
		[cardExpiredDate, toDisplayedCardExpiredDate],
	);

	return (
		<Card variant={variant}>
			<Card.Top />
			<Card.Middle>
				<div className={`${variant}__chip`}></div>
			</Card.Middle>
			<Card.Bottom>
				<div className="card-bottom__number">{displayedCardNumber}</div>
				<div className="card-bottom__info">
					<Card.Text text={cardHolderName} />
					<Card.Text text={displayedCardExpiredDate} />
				</div>
			</Card.Bottom>
		</Card>
	);
}
