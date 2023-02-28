import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import { CardContext } from "../../components/CardProvider";
import { CardsContext } from "../../components/CardsProvider";
import { CardType } from "../../types/common";
import {
  formatCardNumber,
  getBankColor,
  getBankName,
} from "../../utils/format";

function CardList() {
  const cardsContext = useContext(CardsContext);
  const cardContext = useContext(CardContext);

  if (!cardsContext || !cardContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { cards } = cardsContext;
  const { setCard } = cardContext;

  const history = useHistory();
  const handleEmptyCardClick = () => {
    history.push("/add");
  };
  const handleCardClick = (card: CardType, idx: number) => {
    setCard(card);
    history.push(`/complete/${idx}`);
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
