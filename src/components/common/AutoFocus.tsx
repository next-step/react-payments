import { RefObject, useRef, createContext, ReactNode, createRef } from 'react';

interface AutoFocusContext {
	registerInput<T extends HTMLElement>(index: number): RefObject<T>;
	focusIndexOfInput: (index: number) => void;
}

export const AutoFocusContext = createContext<AutoFocusContext | undefined>(undefined);

export default function AutoFocusProvider({ children }: { children: ReactNode }) {
	const inputRefs = useRef<RefObject<HTMLElement>[]>([]);

	const registerInput = <T extends HTMLElement>(index: number): RefObject<T> => {
		if (!inputRefs.current[index] || !inputRefs.current[index].current) {
			inputRefs.current[index] = createRef<T>();
		}

		return inputRefs.current[index] as RefObject<T>;
	};

	const focusIndexOfInput = (index: number) => {
		if (inputRefs.current[index]) {
			inputRefs.current[index].current?.focus();
		}
	};

	const value = {
		registerInput,
		focusIndexOfInput,
	};

	return <AutoFocusContext.Provider value={value}>{children}</AutoFocusContext.Provider>;
}
