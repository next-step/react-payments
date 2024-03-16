import { PaymentCard } from '@components/domain';
import { Button } from '@components/ui-kit';
import { useStepper } from '@contexts/StepperContext';

export interface PaymentCard {
	cardNumber: string;
	cardExpiredDate: string;
	cardHolderName: string;
	cardSecurityCode: string;
	cardPassword: string;
}

export default function AddCardCompletePage() {
	const { state, dispatch } = useStepper();
	const paymentCard = state.data;

	const handleClick = () => {
		dispatch({ type: 'toCards' });
	};
	return (
		<>
			{paymentCard && (
				<div className="flex-column-center">
					<p className="page-title">카드 등록이 완료되었습니다.</p>
					<PaymentCard
						variant="big-card"
						cardNumber={paymentCard.cardNumber}
						cardExpiredDate={paymentCard.cardExpiredDate}
						cardHolderName={paymentCard.cardHolderName}
					/>
					<div className="bottom-button-box">
						<Button onClick={handleClick}>확인</Button>
					</div>
				</div>
			)}
		</>
	);
}
