import { useId, useRef, ChangeEvent, useEffect } from 'react';
import { shallowEqual } from '@xstate/react';

import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine';
import REGEX from 'src/constants/regex';

interface CardNumberInputProps {
	segmentLength?: number;
}

export default function CardNumberInput({ segmentLength = 4 }: CardNumberInputProps) {
	const { send } = useAddCardMachineActorRef();

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

	const isSecondSegmentFocus = useAddCardMachineSelector(state =>
		state.matches({ AddCardForm: { enterCardInfo: 'cardNumberSecondSegment' } }),
	);

	const isThirdSegmentFocus = useAddCardMachineSelector(state =>
		state.matches({ AddCardForm: { enterCardInfo: 'cardNumberThirdSegment' } }),
	);

	const isFourthSegmentFocus = useAddCardMachineSelector(state =>
		state.matches({ AddCardForm: { enterCardInfo: 'cardNumberFourthSegment' } }),
	);

	const secondSegmentInputRef = useRef<HTMLInputElement>(null);
	const thirdSegmentInputRef = useRef<HTMLInputElement>(null);
	const fourthSegmentInputRef = useRef<HTMLInputElement>(null);

	const cardNumberInputId = useId();

	const handleFirstSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberFirstSegment', maxLength: segmentLength });
	};

	const handleFirstSegmentFocus = () => {
		send({ type: 'FOCUS_CARD_NUMBER_FIRST_SEGMENT' });
	};

	const handleSecondSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberSecondSegment', maxLength: segmentLength });
	};

	const handleSecondSegmentFocus = () => {
		send({ type: 'FOCUS_CARD_NUMBER_SECOND_SEGMENT' });
	};

	const handleThirdSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberThirdSegment', maxLength: segmentLength });
	};

	const handleThirdSegmentFocus = () => {
		send({ type: 'FOCUS_CARD_NUMBER_THIRD_SEGMENT' });
	};

	const handleFourthSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''),
			field: 'cardNumberFourthSegment',
			maxLength: segmentLength,
		});
	};

	const handleFourthSegmentFocus = () => {
		send({ type: 'FOCUS_CARD_NUMBER_FOURTH_SEGMENT' });
	};

	useEffect(() => {
		if (isSecondSegmentFocus && secondSegmentInputRef.current) {
			secondSegmentInputRef.current.focus();
		}

		if (isThirdSegmentFocus && thirdSegmentInputRef.current) {
			thirdSegmentInputRef.current.focus();
		}

		if (isFourthSegmentFocus && fourthSegmentInputRef.current) {
			fourthSegmentInputRef.current.focus();
		}
	}, [
		isSecondSegmentFocus,
		secondSegmentInputRef,
		isThirdSegmentFocus,
		thirdSegmentInputRef,
		isFourthSegmentFocus,
		fourthSegmentInputRef,
	]);

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
					onFocus={handleFirstSegmentFocus}
				/>
				<div>-</div>
				<input
					data-testid="second-segment"
					className="input-basic w-15"
					value={cardNumberSecondSegment}
					onChange={handleSecondSegmentChange}
					ref={secondSegmentInputRef}
					maxLength={segmentLength}
					onFocus={handleSecondSegmentFocus}
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
					onFocus={handleThirdSegmentFocus}
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
					onFocus={handleFourthSegmentFocus}
				/>
			</div>
		</div>
	);
}
