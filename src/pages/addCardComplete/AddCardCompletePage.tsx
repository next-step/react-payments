import { useStepper } from '@hooks';
import AddCardAliasForm from './components/AddCardAliasForm';

export default function AddCardCompletePage() {
	const { state } = useStepper();
	const paymentCard = state.data;

	return (
		<>
			{paymentCard && (
				<div className="flex-column-center">
					<div className="page-title-box">
						<p className="page-title">카드 등록이 완료되었습니다.</p>
					</div>
					<AddCardAliasForm data={paymentCard} />
				</div>
			)}
		</>
	);
}
