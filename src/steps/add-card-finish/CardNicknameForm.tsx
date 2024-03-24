import { FormEvent, ChangeEvent, CSSProperties } from 'react';

import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import { AddCardFinishProps } from 'src/steps/add-card-finish/AddCardFinish';

export interface CardNicknameFormProps extends Pick<AddCardFinishProps, 'onUpdate'> {
	maxLength?: number;
	styles?: {
		container?: CSSProperties;
		inputContainer?: CSSProperties;
		input?: CSSProperties;
		buttonBox?: CSSProperties;
		button?: CSSProperties;
	};
}

export default function CardNicknameForm({ maxLength = 10, onUpdate, styles }: CardNicknameFormProps) {
	const { send } = useAddCardMachineActorRef();

	const selectedCardNickname = useAddCardMachineSelector(state => state.context.selectedCard.cardNickname);

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		send({ type: 'EDIT_CARD', onUpdate });
	};

	const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
		send({ type: 'CHANGE_FIELD', value: e.target.value, field: 'cardNickname' });
	};

	return (
		<form onSubmit={handleFormSubmit} data-testid="nickname" className="w-100" style={styles?.container}>
			<div className="input-container flex-center w-100" style={styles?.inputContainer}>
				<input
					className="input-underline w-75"
					type="text"
					placeholder="카드 별칭 (선택)"
					onChange={handleNicknameChange}
					value={selectedCardNickname}
					maxLength={maxLength}
					data-testid="nickname-input"
					style={styles?.input}
				/>
			</div>
			<div className="button-box mt-50" style={styles?.buttonBox}>
				<button className="button-text" type="submit" data-testid="confirm" style={styles?.button}>
					확인
				</button>
			</div>
		</form>
	);
}
