import { InputClassName } from "../input.type";
import InputBox from "../InputBox";

interface InputContainerProps {
	className?: InputClassName;
	title?: string;
	hasInputBox?: boolean;
	children: React.ReactElement;
}

const InputContainer = ({
	className,
	title,
	hasInputBox = false,
	children,
}: InputContainerProps) => {
	return (
		<div className={`input-container ${className?.inputContainerClassName}`}>
			{title && <span className="input-title">{title}</span>}
			{hasInputBox ? (
				<InputBox className={className}>{children}</InputBox>
			) : (
				children
			)}
		</div>
	);
};

export default InputContainer;
