import { InputClassName } from "../input.type";

interface InputBoxProps {
	className?: Omit<InputClassName, "inputContainerClassName">;
	children?: React.ReactElement;
}

const InputBox = ({ className, children }: InputBoxProps) => {
	return (
		<div className={`input-box ${className?.inputBoxClassName}`}>
			{children}
		</div>
	);
};

export default InputBox;
