import { useState, useRef, ChangeEvent } from 'react';

import REGEX from 'src/constants/regex.ts';

export default function useCardNumberInput() {
	const [firstSegment, setFirstSegment] = useState('');
	const [secondSegment, setSecondSegment] = useState('');
	const [thirdSegment, setThirdSegment] = useState('');
	const [fourthSegment, setFourthSegment] = useState('');

	const secondSegmentInputRef = useRef<HTMLInputElement>(null);
	const thirdSegmentInputRef = useRef<HTMLInputElement>(null);
	const fourthSegmentInputRef = useRef<HTMLInputElement>(null);

	const handleFirstSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '').slice(0, 4);
		setFirstSegment(value);

		if (value.length === 4) {
			secondSegmentInputRef.current?.focus();
		}
	};

	const handleSecondSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '').slice(0, 4);
		setSecondSegment(value);

		if (value.length === 4) {
			thirdSegmentInputRef.current?.focus();
		}
	};

	const handleThirdSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '').slice(0, 4);
		setThirdSegment(value);

		if (value.length === 4) {
			fourthSegmentInputRef.current?.focus();
		}
	};

	const handleFourthSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '').slice(0, 4);
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
	};
}
