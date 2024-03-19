import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardNicknameForm from 'src/steps/add-card-finish/CardNicknameForm';
import SelectedCardImage from 'src/steps/add-card-finish/SelectedCardImage';
import type { CardInfoWithId } from 'src/machines/addCardMachine';

export interface AddCardFinishProps {
	onUpdate?: (card: CardInfoWithId) => Promise<void>;
}

export default function AddCardFinish({ onUpdate }: AddCardFinishProps) {
	const isStateAddCardFinish = useAddCardMachineSelector(state => state.matches('AddCardFinish'));

	if (isStateAddCardFinish) {
		return (
			<div className="flex-column-center h-100">
				<div className="flex-center">
					<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
				</div>
				<SelectedCardImage />
				<CardNicknameForm onUpdate={onUpdate} />
			</div>
		);
	}

	return null;
}
