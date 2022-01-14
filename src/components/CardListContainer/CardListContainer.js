import styled from "@emotion/styled";

import CARDS from "../../../fixtures/cards";

import CardList from "../CardList";

const CardListContainer = () => {
  return (
    <>
      <Title>보유카드</Title>
      <CardList cards={CARDS} />
    </>
  );
};

const Title = styled.h1`
  position: relative;
  font-size: 16px;
  font-weight: normal;
  color: #383838;
`;

export default CardListContainer;
