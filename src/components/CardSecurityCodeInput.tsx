import { useId, ChangeEvent } from 'react';

import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';
import REGEX from 'src/constants/regex.ts';

export default function CardSecurityCodeInput() {
	const cardSecurityCodeInputId = useId();

	const [state, send] = useAddCardMachineActor();

	const { cardSecurityCode } = state.context.cardInfo;

	const handleCardSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''),
			field: 'cardSecurityCode',
		});
	};

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
			/>
		</div>
	);
}
