import styled from "@emotion/styled";
import { ReactNode } from "react";
import { findComponentFromChildren } from "../../../common/utils";
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
	const cardNameComponent = findComponentFromChildren(children, CardCompany);
	const chipComponent = findComponentFromChildren(children, Chip);
	const cardNumberComponent = findComponentFromChildren(children, CardNumber);
	const nameComponent = findComponentFromChildren(children, Name);
	const expirationDateComponent = findComponentFromChildren(
		children,
		ExpirationDate
	);
	return (
		<CardProvider size={size}>
			<CardBox>
				<CardWrapper size={size}>
					<CardTop>{cardNameComponent}</CardTop>
					<CardMiddle>{chipComponent}</CardMiddle>
					<CardBottom>
						{cardNumberComponent}
						<CardBottomInfo>
							{nameComponent}
							{expirationDateComponent}
						</CardBottomInfo>
					</CardBottom>
				</CardWrapper>
			</CardBox>
		</CardProvider>
	);
};

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
