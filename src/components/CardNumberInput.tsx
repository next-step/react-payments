import { useId, useRef, ChangeEvent } from 'react';

import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';
import REGEX from 'src/constants/regex.ts';

interface CardNumberInputProps {
	segmentLength?: number;
}

export default function CardNumberInput({ segmentLength = 4 }: CardNumberInputProps) {
	const [state, send] = useAddCardMachineActor();

	const { cardNumberFirstSegment, cardNumberSecondSegment, cardNumberThirdSegment, cardNumberFourthSegment } =
		state.context.cardInfo;

	const secondSegmentInputRef = useRef<HTMLInputElement>(null);
	const thirdSegmentInputRef = useRef<HTMLInputElement>(null);
	const fourthSegmentInputRef = useRef<HTMLInputElement>(null);

	const cardNumberInputId = useId();

	const handleFirstSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberFirstSegment' });

		if (formattedValue.length === segmentLength) {
			secondSegmentInputRef.current?.focus();
		}
	};

	const handleSecondSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberSecondSegment' });

		if (formattedValue.length === segmentLength) {
			thirdSegmentInputRef.current?.focus();
		}
	};

	const handleThirdSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({ type: 'CHANGE_FIELD', value: formattedValue, field: 'cardNumberThirdSegment' });

		if (formattedValue.length === segmentLength) {
			fourthSegmentInputRef.current?.focus();
		}
	};

	const handleFourthSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		send({
			type: 'CHANGE_FIELD',
			value: event.target.value.replace(REGEX.EXCLUDE_NUMBER, ''),
			field: 'cardNumberFourthSegment',
		});
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
		</div>
	);
}
