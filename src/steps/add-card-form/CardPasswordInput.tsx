import { ChangeEvent, useEffect, useId, useRef } from 'react';
import { shallowEqual } from '@xstate/react';

import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine.ts';
import REGEX from 'src/constants/regex.ts';

interface CardPasswordInputProps {
	segmentMaxLength?: number;
}

export default function CardPasswordInput({ segmentMaxLength = 1 }: CardPasswordInputProps) {
	const { send } = useAddCardMachineActorRef();

	const cardPasswordInputId = useId();

	const firstPasswordInputRef = useRef<HTMLInputElement>(null);
	const secondPasswordInputRef = useRef<HTMLInputElement>(null);

	const isFirstPasswordFocus = useAddCardMachineSelector(state =>
		state.matches({ AddCardForm: { enterCardInfo: 'cardPasswordFirstDigit' } }),
	);

	const isSecondPasswordFocus = useAddCardMachineSelector(state =>
		state.matches({ AddCardForm: { enterCardInfo: 'cardPasswordSecondDigit' } }),
	);

	const { cardPasswordFirstDigit, cardPasswordSecondDigit } = useAddCardMachineSelector(
		state => ({
			cardPasswordFirstDigit: state.context.cardInfo.cardPasswordFirstDigit,
			cardPasswordSecondDigit: state.context.cardInfo.cardPasswordSecondDigit,
		}),
		shallowEqual,
	);
	const handleFirstPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardPasswordFirstDigit', maxLength: segmentMaxLength });
	};

	const handleFirstPasswordFocus = () => {
		send({ type: 'FOCUS_CARD_PASSWORD_FIRST_DIGIT' });
	};

	const handleSecondPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''),
			field: 'cardPasswordSecondDigit',
			maxLength: segmentMaxLength,
		});
	};

	const handleSecondPasswordFocus = () => {
		send({ type: 'FOCUS_CARD_PASSWORD_SECOND_DIGIT' });
	};

	useEffect(() => {
		if (isFirstPasswordFocus && firstPasswordInputRef.current) {
			firstPasswordInputRef.current.focus();
		}

		if (isSecondPasswordFocus && secondPasswordInputRef.current) {
			secondPasswordInputRef.current.focus();
		}
	}, [isSecondPasswordFocus, secondPasswordInputRef, isFirstPasswordFocus, firstPasswordInputRef]);

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
					onFocus={handleFirstPasswordFocus}
					ref={firstPasswordInputRef}
				/>
				<input
					data-testid="second-password"
					type="password"
					className="input-basic w-15"
					value={cardPasswordSecondDigit}
					onChange={handleSecondPasswordChange}
					ref={secondPasswordInputRef}
					maxLength={segmentMaxLength}
					onFocus={handleSecondPasswordFocus}
				/>
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
			</div>
		</div>
	);
}
