interface PaymentCardLabelProps {
	label: string;
}

export default function PaymentCardLabel({ label }: PaymentCardLabelProps) {
	return <div>{label}</div>;
}
