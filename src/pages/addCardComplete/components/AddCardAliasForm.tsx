import { PaymentCard } from '@components/domain';
import { Button, Input } from '@components/ui-kit';
import useAddCardAliasForm from '../hooks/useAddCardAliasForm';
import { PaymentCardType } from '@types';

interface AddCardAliasFormProps {
	data: PaymentCardType;
}

export default function AddCardAliasForm({
	data: paymentCard,
}: AddCardAliasFormProps) {
	const { cardAlias, handleCardAliasChange, handleSubmit } =
		useAddCardAliasForm();

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
