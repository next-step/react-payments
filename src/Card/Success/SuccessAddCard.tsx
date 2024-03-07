import BottomFixedButton from "@/common/ui/Button/BottomFixedButton";
import Input from "@/common/ui/Input/Input";
import Text from "@/common/ui/Text/Text";
import { maskStringAfterIndex } from "@/common/utils";
import { convertObjectValuesToString } from "@/common/utils/object";
import { CardFunnelProps } from "@/pages/CardFunnel";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { CardInfo } from "../types/card";
import Card from "../ui/Card/Card";

interface SuccessAddCardProps extends CardFunnelProps {
	card: CardInfo;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SuccessAddCard = ({ card, onNext, onChange }: SuccessAddCardProps) => {
	return (
		<Container>
			<TitleWrapper>
				<Title level='h2' fontSize={20}>
					카드등록이 완료되었습니다.
				</Title>
			</TitleWrapper>
			<CardWrapper>
				<Card size={"big"}>
					<Card.CardCompany text={card.bankName} />
					<Card.Chip />
					<Card.Number
						text={maskStringAfterIndex(
							convertObjectValuesToString(card.cardNumber),
							2
						)}
					/>
					<Card.Name text={card.ownerName} />
					<Card.ExpirationDate
						month={card.expirationDate.month}
						year={card.expirationDate.year}
					/>
				</Card>
				<Input underline name='cardName' onChange={onChange} />
			</CardWrapper>
			<BottomFixedButton width={20} onClick={onNext}>
				<Text.Span color='cyan' fontSize={14}>
					다음
				</Text.Span>
			</BottomFixedButton>
		</Container>
	);
};

export default SuccessAddCard;

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Title = styled(Text.Header)``;

const CardWrapper = styled.div`
	flex: 2;
`;
