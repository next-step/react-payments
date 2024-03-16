import { useId, ChangeEvent, useRef, useEffect } from 'react';

import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine.ts';
import REGEX from 'src/constants/regex.ts';

interface CardSecurityCodeInputProps {
	maxLength?: number;
}

export default function CardSecurityCodeInput({ maxLength = 3 }: CardSecurityCodeInputProps) {
	const cardSecurityCodeInputId = useId();

	const cardSecurityCodeInputRef = useRef<HTMLInputElement>(null);

	const { send } = useAddCardMachineActorRef();

	const cardSecurityCode = useAddCardMachineSelector(state => state.context.cardInfo.cardSecurityCode);

	const isCardSecurityCodeFocus = useAddCardMachineSelector(state =>
		state.matches({ AddCardForm: { enterCardInfo: 'cardSecurityCode' } }),
	);

	const handleCardSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''),
			field: 'cardSecurityCode',
			maxLength,
		});
	};

	const handleCardSecurityCodeFocus = () => {
		send({ type: 'FOCUS_CARD_SECURITY_CODE' });
	};

	useEffect(() => {
		if (isCardSecurityCodeFocus && cardSecurityCodeInputRef.current) {
			cardSecurityCodeInputRef.current.focus();
		}
	}, [isCardSecurityCodeFocus, cardSecurityCodeInputRef]);

	return (
		<div className="input-container">
			<label className="input-title" htmlFor={cardSecurityCodeInputId}>
				보안코드(CVC/CVV)
			</label>
			<input
				type="password"
				className="input-basic w-50"
				value={cardSecurityCode}
				onChange={handleCardSecurityCodeChange}
				id={cardSecurityCodeInputId}
				data-testid="card-security-code"
				onFocus={handleCardSecurityCodeFocus}
				ref={cardSecurityCodeInputRef}
				maxLength={maxLength}
			/>
		</div>
	);
}
