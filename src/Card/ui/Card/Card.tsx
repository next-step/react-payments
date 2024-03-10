import styled from "@emotion/styled";
import { ReactNode } from "react";
import { CardSize } from "../../utils/style";
import {
	CardBottom,
	CardBottomInfo,
	CardBox,
	CardMiddle,
	CardTop
} from "../styles/Card";
import CardCompany from "./core/CardCompany";
import CardNumber from "./core/CardNumber";
import Chip from "./core/Chip";
import ExpirationDate from "./core/ExpirationDate";
import Name from "./core/Name";
import { CardProvider } from "./provider/CardProvider";

interface CardProps {
	size: CardSize;
	children: ReactNode;
}

const Card = ({ size, children }: CardProps) => {
	return (
		<CardProvider size={size}>
			<CardBox>
				<CardWrapper size={size}>{children}</CardWrapper>
			</CardBox>
		</CardProvider>
	);
};

Card.Top = CardTop;
Card.Middle = CardMiddle;
Card.Bottom = CardBottom;
Card.BottomInfo = CardBottomInfo;

Card.CardCompany = CardCompany;
Card.Chip = Chip;
Card.Name = Name;
Card.ExpirationDate = ExpirationDate;
Card.CardNumber = CardNumber;

export default Card;

const CardWrapper = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: ${({ size }) => (size === "small" ? "208px" : "290px")};
	height: ${({ size }) => (size === "small" ? "130px" : "180px")};
	background: #94dacd;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
`;
