import { useEffect, useRef } from "react";
import { useUniqueId } from "../../../hooks";
import CommonInput, { InputProps as CommonInputProps } from "../../Input/Input";
import useFlexibleInputContext from "../provider/useFlexibleInputContext";

export interface InputProps extends CommonInputProps {
	maxLength: number;
}

const Input = ({ maxLength, value, onChange, ...rest }: InputProps) => {
	const { inputRefs, addInput, addInputRef, removeInputRef } =
		useFlexibleInputContext();
	const id = useUniqueId();
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		addInput({ id, value: value ?? "", maxLength });
	}, [value, maxLength, id, addInput]);

	useEffect(() => {
		if (inputRef.current) addInputRef(inputRef.current);

		return () => {
			if (inputRef.current) removeInputRef(inputRef.current);
		};
	}, [inputRef, addInputRef, removeInputRef]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		onChange?.(e);

		if (newValue.length === maxLength && inputRef.current) {
			const currentIndex = inputRefs.indexOf(inputRef.current);
			const nextInput = inputRefs[currentIndex + 1];
			if (nextInput) nextInput.focus();
		}
	};

	return (
		<CommonInput
			ref={inputRef}
			value={value}
			maxLength={maxLength}
			onChange={handleInputChange}
			{...rest}
		/>
	);
};

export default Input;
