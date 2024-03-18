import { CARD_COMPANIES } from "@/Card/constants/cardCompany";
import { CardCompanyInfo } from "@/Card/types/cardCompany";
import styled from "@emotion/styled";
import CardCompany from "./CardCompany";

interface CardCompanyListProps {
	onClick: (card: CardCompanyInfo) => void;
}

const CardCompanyList = ({ onClick }: CardCompanyListProps) => {
	return (
		<CardListContainer>
			{CARD_COMPANIES.map((card) => (
				<CardCompanyWrapper key={card.bankName}>
					<CardCompany
						onClick={() => onClick(card)}
						color={card.color}
						company={card.bankName}
					/>
				</CardCompanyWrapper>
			))}
		</CardListContainer>
	);
};

export default CardCompanyList;

const CardListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
	row-gap: 20px;
`;

const CardCompanyWrapper = styled.div`
	display: flex;
	width: 25%;
	justify-content: center;
`;
