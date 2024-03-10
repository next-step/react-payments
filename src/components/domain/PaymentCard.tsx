import { Card } from '@components/ui-kit';

interface PaymentCardProps {
	cardNumber: string;
	cardExpiredDate: string;
	cardHolderName: string;
}

export default function PaymentCard({
	cardNumber,
	cardExpiredDate,
	cardHolderName,
}: PaymentCardProps) {
	return (
		<Card variant="small-card">
			<Card.Top />
			<Card.Middle>
				<div className="small-card__chip"></div>
			</Card.Middle>
			<Card.Bottom>
				<div className="card-bottom__number">{cardNumber}</div>
				<div className="card-bottom__info">
					<Card.Text text={cardHolderName} />
					<Card.Text text={cardExpiredDate} />
				</div>
			</Card.Bottom>
		</Card>
	);
}
