import React from 'react';

import TextInput from 'src/components/TextInput.tsx';

interface CardNumberInputProps {
	firstSegment: string;
	handleFirstSegmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	secondSegment: string;
	handleSecondSegmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	thirdSegment: string;
	handleThirdSegmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	fourthSegment: string;
	handleFourthSegmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	secondSegmentInputRef: React.RefObject<HTMLInputElement>;
	thirdSegmentInputRef: React.RefObject<HTMLInputElement>;
	fourthSegmentInputRef: React.RefObject<HTMLInputElement>;
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
}: CardNumberInputProps) {
	return (
		<div className="input-container">
			<span className="input-title">카드 번호</span>
			<div className="input-box">
				<TextInput
					testId="first-segment"
					className="input-basic w-15"
					value={firstSegment}
					onChange={handleFirstSegmentChange}
				/>
				<div>-</div>
				<TextInput
					testId="second-segment"
					className="input-basic w-15"
					value={secondSegment}
					onChange={handleSecondSegmentChange}
					ref={secondSegmentInputRef}
				/>
				<div>-</div>
				<TextInput
					testId="third-segment"
					type="password"
					className="input-basic w-15"
					value={thirdSegment}
					onChange={handleThirdSegmentChange}
					ref={thirdSegmentInputRef}
				/>
				<div>-</div>
				<TextInput
					testId="fourth-segment"
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
