import {
	ChangeEventHandler,
	KeyboardEvent,
	useCallback,
	useState
} from "react";

export const useInputState = (
	initialValue = "",
	transformValue: (value: string) => string = defaultTransform,
	keyDownHandler: (
		event: KeyboardEvent<HTMLInputElement>
	) => string = defaultKeyDownHandler
) => {
	const [value, setValue] = useState(initialValue);

	const handleValueChange: ChangeEventHandler<HTMLElement & { value: string }> =
		useCallback(
			({ target: { value } }) => {
				setValue(transformValue(value));
			},
			[transformValue]
		);

	const handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void =
		useCallback(
			(e) => {
				setValue(keyDownHandler(e));
			},
			[keyDownHandler]
		);

	return [value, handleValueChange, handleKeyDown] as const;
};

const defaultTransform = (value: string) => {
	return value;
};

const defaultKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
	return e.currentTarget.value;
};
