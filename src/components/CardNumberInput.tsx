import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';

interface CardNumberInputProps extends ReturnType<typeof useCardNumberInput> {
	id?: string;
}

export default function CardNumberInput({
	firstSegment,
	handleFirstSegmentChange,
	handleFourthSegmentChange,
	handleSecondSegmentChange,
	handleThirdSegmentChange,
	fourthSegmentInputRef,
	secondSegmentInputRef,
	secondSegment,
	thirdSegmentInputRef,
	thirdSegment,
	fourthSegment,
	id,
}: CardNumberInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={id}>
				카드 번호
			</label>
			<div className="input-box">
				<input
					data-testid="first-segment"
					className="input-basic w-15"
					value={firstSegment}
					onChange={handleFirstSegmentChange}
					id={id}
				/>
				<div>-</div>
				<input
					data-testid="second-segment"
					className="input-basic w-15"
					value={secondSegment}
					onChange={handleSecondSegmentChange}
					ref={secondSegmentInputRef}
				/>
				<div>-</div>
				<input
					data-testid="third-segment"
					type="password"
					className="input-basic w-15"
					value={thirdSegment}
					onChange={handleThirdSegmentChange}
					ref={thirdSegmentInputRef}
				/>
				<div>-</div>
				<input
					data-testid="fourth-segment"
					type="password"
					className="input-basic w-15"
					value={fourthSegment}
					onChange={handleFourthSegmentChange}
					ref={fourthSegmentInputRef}
				/>
			</div>
		</div>
	);
}
