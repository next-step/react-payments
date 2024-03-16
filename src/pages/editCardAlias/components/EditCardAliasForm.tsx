import { PaymentCard } from '@components/domain';
import { Button, Input } from '@components/ui-kit';
import { useInput, useSetCards, useStepper } from '@hooks';
import { PaymentCardType } from '@types';
import { useCallback } from 'react';

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
	const handleSubmit = useCallback(() => {
		setCards((prev) =>
			prev.map((card) =>
				card.id === paymentCard.id ? { ...paymentCard, cardAlias } : card,
			),
		);
		dispatch({ type: 'toCards' });
	}, [cardAlias, paymentCard, dispatch, setCards]);

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
