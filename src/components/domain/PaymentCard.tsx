import { Card, CardProps } from '@components/ui-kit';

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
	return (
		<Card variant={variant}>
			<Card.Top />
			<Card.Middle>
				<div className={`${variant}__chip`}></div>
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
