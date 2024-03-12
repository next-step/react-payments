import { useAddCardMachineSelector } from 'src/machines/addCardMachine.ts';
import CardNicknameForm from 'src/steps/add-card-finish/CardNicknameForm.tsx';
import SelectedCardImage from 'src/steps/add-card-finish/SelectedCardImage.tsx';

export default function AddCardFinish() {
	const isStateAddCardFinish = useAddCardMachineSelector(state => state.matches('AddCardFinish'));

	if (isStateAddCardFinish) {
		return (
			<div className="flex-column-center h-100">
				<div className="flex-center">
					<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
				</div>
				<SelectedCardImage />
				<CardNicknameForm />
			</div>
		);
	}

	return null;
}
