import Button from "@/common/ui/Button/Button";
import IconButton from "@/common/ui/Button/IconButton";
import Header from "@/common/ui/Header/Header";
import Text from "@/common/ui/Text/Text";
import { IconName } from "@/common/ui/assets/Icon";
import { maskStringAfterIndex } from "@/common/utils";
import { convertObjectValuesToString } from "@/common/utils/object";
import { CardFunnelProps } from "@/pages/CardFunnel";
import styled from "@emotion/styled";
import { useState } from "react";
import { CARD_COLOR_MAP } from "../constants/cardCompany";
import { useManageCardContext } from "../machine/card/useCardContext";
import { CardInfo } from "../types/card";
import { CARD_COMPANY } from "../types/cardCompany";
import Card from "../ui/Card/Card";
import EmptyCard from "../ui/Card/EmptyCard";

interface CardListProps extends CardFunnelProps {
	cardList: CardInfo[];
	onClickCard: () => void;
}

type MODE = "ADD" | "DELETE";

const ICON_MAPPER: Record<MODE, IconName> = {
	ADD: "setting",
	DELETE: "close"
};

const CardList = ({ cardList, onNext, onClickCard }: CardListProps) => {
	const { send } = useManageCardContext();
	const [mode, setMode] = useState<MODE>("ADD");

	const onToggleMode = () => {
		if (mode === "ADD") setMode("DELETE");
		if (mode === "DELETE") setMode("ADD");
	};

	return (
		<>
			<Header
				title='보유카드'
				rightButton={
					<IconButton
						name={ICON_MAPPER[mode]}
						size='m'
						onClick={onToggleMode}
					/>
				}
			/>
			<Wrapper>
				{cardList.map((card) => {
					return (
						<CardWrapper
							onClick={() => {
								send({ type: "SELECT_CARD", value: card.id });
								onClickCard();
							}}
							key={card.id}
						>
							<Card
								size={"small"}
								color={CARD_COLOR_MAP[card.companyName as CARD_COMPANY]}
							>
								<Card.Top>
									<Card.CardCompany text={`${card.companyName}카드`} />
								</Card.Top>
								<Card.Middle>
									<Card.Chip />
								</Card.Middle>
								<Card.Bottom>
									<Card.CardNumber
										text={maskStringAfterIndex(
											convertObjectValuesToString(card.cardNumber),
											2
										)}
									/>
									<Card.BottomInfo>
										<Card.Name text={card.ownerName} />
										<Card.ExpirationDate
											month={card.expirationDate.month}
											year={card.expirationDate.year}
										/>
									</Card.BottomInfo>
								</Card.Bottom>
							</Card>
							{mode === "ADD" && (
								<TextWrapper>
									<Text.Span fontSize={15}>{card.cardName}</Text.Span>
								</TextWrapper>
							)}
							{mode === "DELETE" && (
								<Button
									onClick={(e) => {
										e.stopPropagation();
										send({ type: "DELETE_CARD", value: card.id });
									}}
									buttonColor='blue400'
									color='white'
									height={2}
									width={65}
								>
									<Text.Span fontSize={15} color='white'>
										삭제
									</Text.Span>
								</Button>
							)}
						</CardWrapper>
					);
				})}
				<EmptyCard mode='blank' onClick={onNext} />
			</Wrapper>
		</>
	);
};

export default CardList;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	overflow-y: scroll;
	max-height: 610px;
`;

const TextWrapper = styled.div`
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
	align-items: center;
`;
