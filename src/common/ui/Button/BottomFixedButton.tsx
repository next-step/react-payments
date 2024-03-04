import styled from "@emotion/styled";
import Button, { ButtonProps } from "./Button";

const BottomFixedButton = (props: ButtonProps) => {
	return (
		<StyleFixedButtonWrapper>
			<Button {...props}>{props.children}</Button>
		</StyleFixedButtonWrapper>
	);
};

export default BottomFixedButton;

const StyleFixedButtonWrapper = styled.div`
	display: flex;
	position: absolute;
	justify-content: flex-end;
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;
	left: 0;
	bottom: 20px;
`;
