import { useId, ChangeEvent } from 'react';

import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine';
import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';

interface CardSecurityCodeInputProps {
	maxLength?: number;
}

export default function CardOwnerNameInput({ maxLength = 30 }: CardSecurityCodeInputProps) {
	const cardOwnerNameInputId = useId();

	const { send } = useAddCardMachineActorRef();

	const { focusNextInput: focusCardSecurityCodeInput, ref: cardOwnerNameInputRef } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_OWNER_NAME,
	);

	const handleCardOwnerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value,
			field: 'cardOwnerName',
		});

		if (event.target.value.length === maxLength) {
			focusCardSecurityCodeInput();
		}
	};

	const cardOwnerName = useAddCardMachineSelector(state => state.context.cardInfo.cardOwnerName);

	return (
		<div className="input-container">
			<label className="input-label-box" htmlFor={cardOwnerNameInputId}>
				<div className="input-title">카드 소유자 이름(선택)</div>
				<div className="input-title">{`${cardOwnerName.length} / ${maxLength}`}</div>
			</label>
			<input
				placeholder="카드에 표시된 이름과 동일하게 입력하세요."
				className="input-basic"
				value={cardOwnerName}
				onChange={handleCardOwnerNameChange}
				id={cardOwnerNameInputId}
				data-testid="card-owner-name"
				maxLength={maxLength}
				ref={cardOwnerNameInputRef}
			/>
		</div>
	);
}
