import Header from "@/common/ui/Header/Header";
import Text from "@/common/ui/Text/Text";
import { maskObjectValuesAfterIndex } from "@/common/utils/object";
import { CardFunnelProps } from "@/pages/CardFunnel";
import styled from "@emotion/styled";
import { CardInfo } from "../types/card";
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
							<Card size={"small"}>
								<Card.CardCompany text={card.bankName} />
								<Card.Chip />
								<Card.Number
									text={maskObjectValuesAfterIndex(card.cardNumber, 2)}
								/>
								<Card.Name text={card.ownerName} />
								<Card.ExpirationDate
									month={card.expirationDate.month}
									year={card.expirationDate.year}
								/>
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
