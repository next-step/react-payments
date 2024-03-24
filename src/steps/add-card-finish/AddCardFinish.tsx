import { CSSProperties } from 'react';

import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardNicknameForm, { CardNicknameFormProps } from 'src/steps/add-card-finish/CardNicknameForm';
import SelectedCardImage, { SelectedCardImageProps } from 'src/steps/add-card-finish/SelectedCardImage';
import type { CardInfoWithId } from 'src/types/card.type';

export interface AddCardFinishProps {
	onUpdate?: (card: CardInfoWithId) => void;
	styles?: {
		selectedCardImage?: SelectedCardImageProps['styles'];
		cardNicknameForm?: CardNicknameFormProps['styles'];
		container?: CSSProperties;
		header?: CSSProperties;
		title?: CSSProperties;
	};
}

export default function AddCardFinish({ onUpdate, styles }: AddCardFinishProps) {
	const isStateAddCardFinish = useAddCardMachineSelector(state => state.matches('AddCardFinish'));

	if (isStateAddCardFinish) {
		return (
			<div className="flex-column-center h-100" style={styles?.container}>
				<div className="flex-center" style={styles?.header}>
					<h2 className="page-title mb-10" style={styles?.title}>
						카드등록이 완료되었습니다.
					</h2>
				</div>
				<SelectedCardImage styles={styles?.selectedCardImage} />
				<CardNicknameForm onUpdate={onUpdate} styles={styles?.cardNicknameForm} />
			</div>
		);
	}

	return null;
}
