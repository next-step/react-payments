import styled from "@emotion/styled";
import { ReactNode } from "react";
import { InputWidth } from "../../utils";
import {
	findComponentFromChildren,
	findRestFromChildren
} from "../../utils/component";
import Count from "./core/Count";
import Input from "./core/Input";
import InputBox from "./core/InputBox";
import Separator from "./core/Separator";
import Title from "./core/Title";
import { FlexibleInputProvider } from "./provider/FlexibleInputProvider";

export interface FlexibleInputProps {
	children: ReactNode;
	width?: InputWidth;
}

const FlexibleInput = ({ children, width = 100 }: FlexibleInputProps) => {
	const titleComponent = findComponentFromChildren(children, Title);
	const countComponent = findComponentFromChildren(children, Count);
	const restComponents = findRestFromChildren(children, [Title, Count]);

	return (
		<FlexibleInputProvider>
			<InputContainer width={width}>
				<InputTop>
					{titleComponent}
					{countComponent}
				</InputTop>
				{restComponents}
			</InputContainer>
		</FlexibleInputProvider>
	);
};

FlexibleInput.Title = Title;
FlexibleInput.Count = Count;
FlexibleInput.InputBox = InputBox;
FlexibleInput.Input = Input;
FlexibleInput.Separator = Separator;

export default FlexibleInput;

interface InputContainerProps {
	width: InputWidth;
}

const InputContainer = styled.label<InputContainerProps>`
	margin: 8px 0;
	width: ${({ width }) => width}%;
`;

const InputTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
