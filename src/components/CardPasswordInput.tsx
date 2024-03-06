import { ChangeEvent, useId, useRef } from 'react';

import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';
import REGEX from 'src/constants/regex.ts';

interface CardPasswordInputProps {
	segmentMaxLength?: number;
}

export default function CardPasswordInput({ segmentMaxLength = 1 }: CardPasswordInputProps) {
	const [state, send] = useAddCardMachineActor();

	const { cardPasswordFirstDigit, cardPasswordSecondDigit } = state.context.cardInfo;

	const cardPasswordInputId = useId();

	const secondPasswordInputRef = useRef<HTMLInputElement>(null);

	const handleFirstPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardPasswordFirstDigit' });

		if (formattedValue.length === segmentMaxLength) {
			secondPasswordInputRef.current?.focus();
		}
	};

	const handleSecondPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''),
			field: 'cardPasswordSecondDigit',
		});
	};

	return (
		<div className="input-container">
			<label className="input-title" htmlFor={cardPasswordInputId}>
				카드 비밀번호
			</label>
			<div className="input-box">
				<input
					data-testid="first-password"
					type="password"
					className="input-basic w-15"
					value={cardPasswordFirstDigit}
					onChange={handleFirstPasswordChange}
					id={cardPasswordInputId}
					maxLength={segmentMaxLength}
				/>
				<input
					data-testid="second-password"
					type="password"
					className="input-basic w-15"
					value={cardPasswordSecondDigit}
					onChange={handleSecondPasswordChange}
					ref={secondPasswordInputRef}
					maxLength={segmentMaxLength}
				/>
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
			</div>
		</div>
	);
}
