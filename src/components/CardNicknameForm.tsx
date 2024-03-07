import { FormEvent, ChangeEvent } from 'react';

import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';

interface CardNicknameFormProps {
	maxLength?: number;
}

export default function CardNicknameForm({ maxLength = 10 }: CardNicknameFormProps) {
	const [state, send] = useAddCardMachineActor();

	const { cardNickname } = state.context.selectedCard;

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		send({ type: 'EDIT_CARD' });
	};

	const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
		send({ type: 'CHANGE_FIELD', value: e.target.value, field: 'cardNickname' });
	};

	return (
		<form onSubmit={handleFormSubmit} data-testid="nickname" className="w-100">
			<div className="input-container flex-center w-100">
				<input
					className="input-underline w-75"
					type="text"
					placeholder="카드 별칭 (선택)"
					onChange={handleNicknameChange}
					value={cardNickname}
					maxLength={maxLength}
					data-testid="nickname-input"
				/>
			</div>
			<div className="button-box mt-50">
				<button className="button-text" type="submit" data-testid="confirm">
					확인
				</button>
			</div>
		</form>
	);
}
