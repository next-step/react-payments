import { useId, ChangeEvent, useRef, useEffect } from 'react';

import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine.ts';

interface CardSecurityCodeInputProps {
	maxLength?: number;
}

export default function CardOwnerNameInput({ maxLength = 30 }: CardSecurityCodeInputProps) {
	const cardOwnerNameInputId = useId();

	const cardOwnerNameInputRef = useRef<HTMLInputElement>(null);

	const { send } = useAddCardMachineActorRef();

	const handleCardOwnerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value,
			field: 'cardOwnerName',
			maxLength,
		});
	};

	const handleCardOwnerNameFocus = () => {
		send({ type: 'FOCUS_CARD_OWNER_NAME' });
	};

	const cardOwnerName = useAddCardMachineSelector(state => state.context.cardInfo.cardOwnerName);

	const isCardOwnerNameFocus = useAddCardMachineSelector(state =>
		state.matches({
			AddCardForm: { enterCardInfo: 'cardOwnerName' },
		}),
	);

	useEffect(() => {
		if (isCardOwnerNameFocus && cardOwnerNameInputRef.current) {
			cardOwnerNameInputRef.current.focus();
		}
	}, [isCardOwnerNameFocus, cardOwnerNameInputRef]);

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
				onFocus={handleCardOwnerNameFocus}
			/>
		</div>
	);
}
