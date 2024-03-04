import { Width } from "@/common/utils";
import { css } from "@emotion/react";
import { Children, ReactNode, isValidElement } from "react";
import Input from "./Input";
import Separator from "./Separator";

interface InputBoxProps {
	children: ReactNode;
	width?: Width;
}

const InputBox = ({ children, width = 100 }: InputBoxProps) => {
	const inputs = Children.toArray(children).every(
		(child) =>
			(isValidElement(child) && child.type === Input) ||
			(isValidElement(child) && child.type === Separator)
	);

	if (!inputs) {
		throw new Error(
			"InputBox 컴포넌트는 Input, Separator 컴포넌트만 받을 수 있습니다."
		);
	}
	return (
		<div
			css={css`
				width: ${width}%;
				display: flex;
				align-items: center;
				margin-top: 0.375rem;
				color: #d3d3d3;
				border-radius: 0.25rem;
				background-color: #ecebf1;
			`}
		>
			{children}
		</div>
	);
};

export default InputBox;
