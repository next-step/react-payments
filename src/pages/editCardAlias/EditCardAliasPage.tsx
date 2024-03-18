import { useStepper } from '@hooks';
import EditCardAliasForm from './components/EditCardAliasForm';

export default function EditCardAliasPage() {
	const { state } = useStepper();
	const paymentCard = state.data;

	return (
		<>
			{paymentCard && (
				<div className="flex-column-center">
					<div className="page-title-box">
						<p className="page-title">카드 별칭을 입력해주세요</p>
					</div>
					<EditCardAliasForm data={paymentCard} />
				</div>
			)}
		</>
	);
}
