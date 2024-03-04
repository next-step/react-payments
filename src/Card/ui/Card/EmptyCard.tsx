import { CardSize } from "@/Card/utils/style";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { findComponentFromChildren } from "../../../common/utils";
import {
	CardBottom,
	CardBottomInfo,
	CardBox,
	CardMiddle,
	CardTop
} from "../styles/Card";
import CardCompany from "./core/CardCompany";
import Chip from "./core/Chip";
import ExpirationDate from "./core/ExpirationDate";
import Name from "./core/Name";
import Number from "./core/Number";
import { CardProvider } from "./provider/CardProvider";

export interface EmptyCardProps {
	mode: "blank" | "add";
	children?: ReactNode;
	size?: CardSize;
	onClick?: () => void;
}

const EmptyCard = ({
	mode,
	children,
	size = "small",
	onClick
}: EmptyCardProps) => {
	const cardNameComponent = findComponentFromChildren(children, CardCompany);
	const chipComponent = findComponentFromChildren(children, Chip);
	const cardNumberComponent = findComponentFromChildren(children, Number);
	const nameComponent = findComponentFromChildren(children, Name);
	const expirationDateComponent = findComponentFromChildren(
		children,
		ExpirationDate
	);
	return (
		<CardProvider size={size}>
			<CardBox>
				{mode === "blank" && (
					<EmptyCardWrapper onClick={onClick}>+</EmptyCardWrapper>
				)}
				{mode === "add" && (
					<EmptyCardWrapper onClick={onClick}>
						<CardTop>{cardNameComponent}</CardTop>
						<CardMiddle>{chipComponent}</CardMiddle>
						<CardBottom>
							{cardNumberComponent}
							<CardBottomInfo>
								{nameComponent}
								{expirationDateComponent}
							</CardBottomInfo>
						</CardBottom>
					</EmptyCardWrapper>
				)}
			</CardBox>
		</CardProvider>
	);
};

export default EmptyCard;

EmptyCard.CardCompany = CardCompany;
EmptyCard.Chip = Chip;
EmptyCard.Name = Name;
EmptyCard.ExpirationDate = ExpirationDate;
EmptyCard.Number = Number;

const EmptyCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 208px;
	height: 130px;

	font-size: 30px;
	color: #575757;

	background: #e5e5e5;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;

	user-select: none;
`;
