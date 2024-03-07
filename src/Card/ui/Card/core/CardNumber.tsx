import styled from "@emotion/styled";
import { CardText } from "../../styles/Card";
import useCardContext from "../provider/useCardContext";

export interface NumberProps {
	text: string;
}

const CardNumber = ({ text }: NumberProps) => {
	const { size } = useCardContext();
	return (
		<CardBottomNumber>
			<CardText size={size}>{text}</CardText>
		</CardBottomNumber>
	);
};

export default CardNumber;

const CardBottomNumber = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;
