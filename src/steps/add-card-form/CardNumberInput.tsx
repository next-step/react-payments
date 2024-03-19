import { useId, ChangeEvent, useState } from 'react';
import { shallowEqual } from '@xstate/react';

import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine';
import REGEX from 'src/constants/regex';
import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';
import { cardNumberSchema } from 'src/schema/cardInfoSchema';

interface CardNumberInputProps {
	segmentLength?: number;
}

export default function CardNumberInput({ segmentLength = 4 }: CardNumberInputProps) {
	const { send } = useAddCardMachineActorRef();

	const { focusNextInput: focusSecondSegmentInput } = useAutoFocus(AUTO_FOCUS_INDEX.CARD_NUMBER.FIRST);

	const { ref: secondSegmentInputRef, focusNextInput: focusThirdSegmentInput } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_NUMBER.SECOND,
	);

	const { ref: thirdSegmentInputRef, focusNextInput: focusFourthSegmentInput } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_NUMBER.THIRD,
	);

	const { ref: fourthSegmentInputRef, focusNextInput: focusCardExpirationDateInput } = useAutoFocus<HTMLInputElement>(
		AUTO_FOCUS_INDEX.CARD_NUMBER.FOURTH,
	);

	const [isCardNumberChange, setIsCardNumberChange] = useState(false);

	const { cardNumberFirstSegment, cardNumberSecondSegment, cardNumberThirdSegment, cardNumberFourthSegment } =
		useAddCardMachineSelector(
			state => ({
				cardNumberFirstSegment: state.context.cardInfo.cardNumberFirstSegment,
				cardNumberSecondSegment: state.context.cardInfo.cardNumberSecondSegment,
				cardNumberThirdSegment: state.context.cardInfo.cardNumberThirdSegment,
				cardNumberFourthSegment: state.context.cardInfo.cardNumberFourthSegment,
			}),
			shallowEqual,
		);

	const isCardNumberValid = cardNumberSchema.safeParse({
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
	}).success;

	const cardNumberInputId = useId();

	const handleFirstSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberFirstSegment' });

		setIsCardNumberChange(true);

		if (formattedValue.length === segmentLength) {
			focusSecondSegmentInput();
		}
	};

	const handleSecondSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberSecondSegment' });

		setIsCardNumberChange(true);

		if (formattedValue.length === segmentLength) {
			focusThirdSegmentInput();
		}
	};

	const handleThirdSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberThirdSegment' });

		setIsCardNumberChange(true);

		if (formattedValue.length === segmentLength) {
			focusFourthSegmentInput();
		}
	};

	const handleFourthSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({
			type: 'CHANGE_FIELD',
			value: formattedValue,
			field: 'cardNumberFourthSegment',
		});

		setIsCardNumberChange(true);

		if (formattedValue.length === segmentLength) {
			focusCardExpirationDateInput();
		}
	};

	return (
		<div className="input-container">
			<label className="input-title" htmlFor={cardNumberInputId}>
				카드 번호
			</label>
			<div className="input-box">
				<input
					data-testid="first-segment"
					className="input-basic w-15"
					value={cardNumberFirstSegment}
					onChange={handleFirstSegmentChange}
					id={cardNumberInputId}
					maxLength={segmentLength}
				/>
				<div>-</div>
				<input
					data-testid="second-segment"
					className="input-basic w-15"
					value={cardNumberSecondSegment}
					onChange={handleSecondSegmentChange}
					ref={secondSegmentInputRef}
					maxLength={segmentLength}
				/>
				<div>-</div>
				<input
					data-testid="third-segment"
					type="password"
					className="input-basic w-15"
					value={cardNumberThirdSegment}
					onChange={handleThirdSegmentChange}
					ref={thirdSegmentInputRef}
					maxLength={segmentLength}
				/>
				<div>-</div>
				<input
					data-testid="fourth-segment"
					type="password"
					className="input-basic w-15"
					value={cardNumberFourthSegment}
					onChange={handleFourthSegmentChange}
					ref={fourthSegmentInputRef}
					maxLength={segmentLength}
				/>
			</div>
			{isCardNumberChange && !isCardNumberValid && <div className="input-error">카드 번호가 올바르지 않습니다.</div>}
		</div>
	);
}
