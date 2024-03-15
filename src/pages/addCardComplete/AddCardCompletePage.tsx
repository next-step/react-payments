import { PaymentCard } from '@components/domain';
import { Button } from '@components/ui-kit';
import { useStepper } from '@contexts/StepperContext';

interface PaymentCard {
	cardNumber: string;
	cardExpiredDate: string;
	cardHolderName: string;
	cardSecurityCode: string;
	cardPassword: string;
}

interface AddCardCompletePageProps {
	data: PaymentCard;
}

export default function AddCardCompletePage() {
	const { dispatch } = useStepper();
	const handleClick = () => {
		dispatch({ type: 'toCards' });
	};
	return (
		<div className="flex-column-center">
			<p className="page-title">카드 등록이 완료되었습니다.</p>
			{/* <PaymentCard
				cardNumber={cardNumber}
				cardExpiredDate={cardExpiredDate}
				cardHolderName={cardHolderName}
			/> */}
			<div style={{ width: '100%', textAlign: 'right' }}>
				<Button onClick={handleClick}>다음</Button>
			</div>
		</div>
	);
}
