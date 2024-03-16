import { PaymentCard } from '@components/domain';
import { Button, Input } from '@components/ui-kit';
import { useInput, useSetCards, useStepper } from '@hooks';
import { PaymentCardType } from '@types';

interface EditCardAliasFormProps {
	data: PaymentCardType;
}

export default function EditCardAliasForm({
	data: paymentCard,
}: EditCardAliasFormProps) {
	const { value: cardAlias, handleChange: handleCardAliasChange } = useInput(
		{},
	);
	const { dispatch } = useStepper();
	const setCards = useSetCards();
	const handleSubmit = () => {
		setCards((prev) => [...prev, { ...paymentCard, cardAlias }]);
		dispatch({ type: 'toCards' });
	};

	return (
		<form className="flex-column-center" onSubmit={handleSubmit}>
			<PaymentCard
				variant="big-card"
				cardNumber={paymentCard.cardNumber}
				cardExpiredDate={paymentCard.cardExpiredDate}
				cardHolderName={paymentCard.cardHolderName}
			/>
			<Input
				variant="underline"
				value={cardAlias}
				onChange={handleCardAliasChange}
				maxLength={10}
				placeholder="카드 별칭"
			/>
			<div className="bottom-button-box">
				<Button type="submit">확인</Button>
			</div>
		</form>
	);
}
