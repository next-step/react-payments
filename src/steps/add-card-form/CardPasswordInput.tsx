import { ChangeEvent, useId, useState } from 'react';
import { shallowEqual } from '@xstate/react';

import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import REGEX from 'src/constants/regex';
import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';
import { cardPasswordSchema } from 'src/schema/cardInfoSchema';

interface CardPasswordInputProps {
	segmentMaxLength?: number;
}

export default function CardPasswordInput({ segmentMaxLength = 1 }: CardPasswordInputProps) {
	const { send } = useAddCardMachineActorRef();

	const cardPasswordInputId = useId();

	const { focusNextInput: focusSecondPassword, ref: firstPasswordInputRef } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_PASSWORD.FIRST,
	);

	const { ref: secondPasswordInputRef, focusNextInput: focusNextButton } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_PASSWORD.SECOND,
	);

	const [isCardPasswordChanged, setIsCardPasswordChanged] = useState(false);

	const { cardPasswordFirstDigit, cardPasswordSecondDigit } = useAddCardMachineSelector(
		state => ({
			cardPasswordFirstDigit: state.context.cardInfo.cardPasswordFirstDigit,
			cardPasswordSecondDigit: state.context.cardInfo.cardPasswordSecondDigit,
		}),
		shallowEqual,
	);

	const isCardPasswordValid = cardPasswordSchema.safeParse({
		cardPasswordFirstDigit,
		cardPasswordSecondDigit,
	}).success;

	const handleFirstPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardPasswordFirstDigit', maxLength: segmentMaxLength });

		setIsCardPasswordChanged(true);

		if (formattedValue.length === segmentMaxLength) {
			focusSecondPassword();
		}
	};

	const handleSecondPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({
			type: 'CHANGE_FIELD',
			value: formattedValue,
			field: 'cardPasswordSecondDigit',
		});

		setIsCardPasswordChanged(true);

		if (formattedValue.length === segmentMaxLength) {
			focusNextButton();
		}
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
				/>
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
			</div>
			{isCardPasswordChanged && !isCardPasswordValid && (
				<div className="input-error">카드 비밀번호를 입력해주세요.</div>
			)}
		</div>
	);
}
