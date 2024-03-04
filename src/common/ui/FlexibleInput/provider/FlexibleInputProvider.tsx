import {
	ReactNode,
	createContext,
	useCallback,
	useMemo,
	useState
} from "react";

export type FlexibleInputMode = "count" | "default";

interface Input {
	id: string;
	value: string | number | readonly string[];
	maxLength: number;
}

interface FlexibleInputContextType {
	mode: FlexibleInputMode;
	onChangeMode: (mode: FlexibleInputMode) => void;
	// count
	addInput: (input: Input) => void;
	totalMaxLength: number;
	totalCurrentLength: number;
	// auto focus
	inputRefs: HTMLInputElement[];
	addInputRef: (ref: HTMLInputElement) => void;
	removeInputRef: (ref: HTMLInputElement) => void;
}

const FlexibleInputContext = createContext<FlexibleInputContextType | null>(
	null
);

interface FlexibleInputProviderProps {
	children: ReactNode;
}

const FlexibleInputProvider = ({ children }: FlexibleInputProviderProps) => {
	const [mode, setMode] = useState<FlexibleInputMode>("default");

	const onChangeMode = useCallback((mode: FlexibleInputMode) => {
		setMode(mode);
	}, []);

	const [inputs, setInputs] = useState<Input[]>([]);

	const addInput = useCallback(
		({ id, value, maxLength }: Input) => {
			if (mode !== "count") return;
			setInputs((prev) => {
				const index = prev.findIndex((input) => input.id === id);
				if (index === -1) {
					return [
						...prev,
						{
							id,
							value: value.toString(),
							maxLength
						}
					];
				}
				const newInputs = [...prev];
				newInputs[index] = {
					...newInputs[index],
					value: value.toString()
				};
				return newInputs;
			});
		},
		[mode]
	);

	const totalMaxLength = inputs.reduce((acc, curr) => acc + curr.maxLength, 0);
	const totalCurrentLength = inputs.reduce(
		(acc, curr) => acc + curr.value.toString().length,
		0
	);

	const [inputRefs, setInputRefs] = useState<HTMLInputElement[]>([]);

	const addInputRef = useCallback((ref: HTMLInputElement) => {
		setInputRefs((prevRefs) => [...prevRefs, ref]);
	}, []);

	const removeInputRef = useCallback((ref: HTMLInputElement) => {
		setInputRefs((prevRefs) => prevRefs.filter((r) => r !== ref));
	}, []);

	const memoizedValue = useMemo(() => {
		return {
			mode,
			onChangeMode,
			addInput,
			totalMaxLength,
			totalCurrentLength,
			inputRefs,
			addInputRef,
			removeInputRef
		};
	}, [
		mode,
		onChangeMode,
		addInput,
		totalMaxLength,
		totalCurrentLength,
		inputRefs,
		addInputRef,
		removeInputRef
	]);

	return (
		<FlexibleInputContext.Provider value={memoizedValue}>
			{children}
		</FlexibleInputContext.Provider>
	);
};

export { FlexibleInputContext, FlexibleInputProvider };
