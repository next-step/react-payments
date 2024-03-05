import { useState, useRef, ChangeEvent, useId } from 'react';

import REGEX from 'src/constants/regex.ts';

interface UseCardNumberInputOptions {
	segmentLength: number;
}

export default function useCardNumberInput(options: UseCardNumberInputOptions = { segmentLength: 4 }) {
	const { segmentLength } = options;

	const [firstSegment, setFirstSegment] = useState('');
	const [secondSegment, setSecondSegment] = useState('');
	const [thirdSegment, setThirdSegment] = useState('');
	const [fourthSegment, setFourthSegment] = useState('');

	const secondSegmentInputRef = useRef<HTMLInputElement>(null);
	const thirdSegmentInputRef = useRef<HTMLInputElement>(null);
	const fourthSegmentInputRef = useRef<HTMLInputElement>(null);

	const cardNumberInputId = useId();

	const handleFirstSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');
		setFirstSegment(value);

		if (value.length === segmentLength) {
			secondSegmentInputRef.current?.focus();
		}
	};

	const handleSecondSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');
		setSecondSegment(value);

		if (value.length === segmentLength) {
			thirdSegmentInputRef.current?.focus();
		}
	};

	const handleThirdSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');
		setThirdSegment(value);

		if (value.length === segmentLength) {
			fourthSegmentInputRef.current?.focus();
		}
	};

	const handleFourthSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');
		setFourthSegment(value);
	};

	return {
		firstSegment,
		secondSegment,
		thirdSegment,
		fourthSegment,
		handleFirstSegmentChange,
		handleSecondSegmentChange,
		handleThirdSegmentChange,
		handleFourthSegmentChange,
		secondSegmentInputRef,
		thirdSegmentInputRef,
		fourthSegmentInputRef,
		segmentLength,
		id: cardNumberInputId,
	};
}
