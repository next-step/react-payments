import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import { CardContext } from "../../components/CardProvider";
import { CardsContext } from "../../components/CardsProvider";
import { CardNumbers } from "../../components/Form/CardNumber";
import { BANKS } from "../../constants/bank";
import { CardType } from "../../types/common";

const formatNumber = (number: string) => {
  return number.replaceAll(/[0-9]/g, "*");
};

const formatCardNumber = (cardNumber: CardNumbers) => {
  const hasCardNumber = Object.values(cardNumber).some(
    (cardNumber) => cardNumber
  );
  return hasCardNumber
    ? `${cardNumber[0]}-${cardNumber[1]}-${formatNumber(
        cardNumber[2]
      )}-${formatNumber(cardNumber[3])}`
    : "";
};

const getBankName = (bankId: string) => {
  if (!bankId) {
    return "";
  }

  if (bankId) {
    const selectedBank = BANKS.find((bank) => bank.ID === bankId);
    return selectedBank ? selectedBank.NAME : "";
  }
};
const getBankColor = (bankId: string) => {
  if (!bankId) {
    return "";
  }

  if (bankId) {
    const selectedBank = BANKS.find((bank) => bank.ID === bankId);
    return selectedBank ? selectedBank.COLOR : "";
  }
};

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
