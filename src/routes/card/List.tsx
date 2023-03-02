import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import { ROUTE } from "../../constants/route";
import useCardContext from "../../hooks/useCardContext";
import useCardsContext from "../../hooks/useCardsContext";
import { CardType } from "../../types/common";
import {
  formatCardNumber,
  getBankColor,
  getBankName,
} from "../../utils/format";

function CardList() {
  const { cards } = useCardsContext();
  const { setCard } = useCardContext();

  const history = useHistory();
  const handleEmptyCardClick = () => {
    history.push(ROUTE.ADD);
  };
  const handleCardClick = (card: CardType, idx: number) => {
    setCard(card);
    history.push(`${ROUTE.COMPLETE}/${idx}`);
  };

  return (
    <>
      <TitleWrapper>
        <Title>보유 카드</Title>
      </TitleWrapper>
      {cards.map((card, idx) => (
        <React.Fragment key={idx}>
          <Card
            cardNumber={formatCardNumber(card.cardNumber)}
            expiredDate={card.expiredDate}
            userName={card.userName}
            bankName={getBankName(card.bankId)}
            color={getBankColor(card.bankId)}
            onClick={() => handleCardClick(card, idx)}
          />
          <span>{card.cardAlias}</span>
        </React.Fragment>
      ))}
      <Card isEmpty onClick={handleEmptyCardClick} />
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
  margin-bottom: 2.5rem;
`;

export default CardList;
