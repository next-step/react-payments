import BottomFixedButton from "@/common/ui/Button/BottomFixedButton";
import Input from "@/common/ui/Input/Input";
import Text from "@/common/ui/Text/Text";
import { maskStringAfterIndex } from "@/common/utils";
import { convertObjectValuesToString } from "@/common/utils/object";
import { CardFunnelProps } from "@/pages/CardFunnel";
import styled from "@emotion/styled";
import { CARD_COLOR_MAP } from "../constants/cardCompany";
import { useManageCardContext } from "../machine/card/useCardContext";
import { CardInfo } from "../types/card";
import { CARD_COMPANY } from "../types/cardCompany";
import Card from "../ui/Card/Card";

interface SuccessAddCardProps extends CardFunnelProps {
	card: CardInfo;
}

const SuccessAddCard = ({ card, onNext }: SuccessAddCardProps) => {
	const { send } = useManageCardContext();

	return (
		<Container>
			<TitleWrapper>
				<Title level='h2' fontSize={20}>
					카드등록이 완료되었습니다.
				</Title>
			</TitleWrapper>
			<CardWrapper>
				<Card
					size={"big"}
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
				<Input
					underline
					name='cardName'
					maxLength={10}
					onChange={(e) => {
						send({ type: "CHANGE_CARD_NAME", value: e.target.value });
					}}
				/>
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
