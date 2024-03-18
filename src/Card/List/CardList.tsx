import Header from "@/common/ui/Header/Header";
import Text from "@/common/ui/Text/Text";
import { maskStringAfterIndex } from "@/common/utils";
import { convertObjectValuesToString } from "@/common/utils/object";
import { CardFunnelProps } from "@/pages/CardFunnel";
import styled from "@emotion/styled";
import { CARD_COLOR_MAP } from "../constants/cardCompany";
import { CardInfo } from "../types/card";
import { CARD_COMPANY } from "../types/cardCompany";
import Card from "../ui/Card/Card";
import EmptyCard from "../ui/Card/EmptyCard";

interface CardListProps extends CardFunnelProps {
	cardList: CardInfo[];
}

const CardList = ({ cardList, onNext }: CardListProps) => {
	return (
		<>
			<Header title='보유카드' />
			<Wrapper>
				{cardList.map((card) => {
					return (
						<CardWrapper key={card.id}>
							<Card
								size={"small"}
								color={CARD_COLOR_MAP[card.bankName as CARD_COMPANY]}
							>
								<Card.Top>
									<Card.CardCompany text={card.bankName} />
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
							<Text.Span>{card.cardName}</Text.Span>
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

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
	align-items: center;
`;
