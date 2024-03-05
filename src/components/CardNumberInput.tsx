import { RefObject, ChangeEvent } from 'react';

interface CardNumberInputProps {
	firstSegment: string;
	handleFirstSegmentChange: (e: ChangeEvent<HTMLInputElement>) => void;
	secondSegment: string;
	handleSecondSegmentChange: (e: ChangeEvent<HTMLInputElement>) => void;
	thirdSegment: string;
	handleThirdSegmentChange: (e: ChangeEvent<HTMLInputElement>) => void;
	fourthSegment: string;
	handleFourthSegmentChange: (e: ChangeEvent<HTMLInputElement>) => void;
	secondSegmentInputRef: RefObject<HTMLInputElement>;
	thirdSegmentInputRef: RefObject<HTMLInputElement>;
	fourthSegmentInputRef: RefObject<HTMLInputElement>;
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
