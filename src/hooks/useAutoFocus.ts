import { useContext, useMemo } from 'react';

import { AutoFocusContext } from 'src/components/common/AutoFocus';

export const useAutoFocusContext = () => {
	const context = useContext(AutoFocusContext);
	if (!context) {
		throw new Error('AutoFocusContext is not provided');
	}
	return context;
};

export const useAutoFocus = <T extends HTMLElement>(index: number) => {
	const { registerInput, focusIndexOfInput } = useAutoFocusContext();

	const inputRefOfIndex = useMemo(() => registerInput<T>(index), [index, registerInput]);

	const focusNextInput = () => {
		focusIndexOfInput(index + 1);
	};

	const focusPrevInput = () => {
		focusIndexOfInput(index - 1);
	};

	return { ref: inputRefOfIndex, focusIndexOfInput, focusNextInput, focusPrevInput };
};
