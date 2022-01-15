import styled from "@emotion/styled";

import { CARDS } from "../../../fixtures/cards";

import AddCardButton from "../AddCardButton/AddCardButton";

import CardList from "../CardList";

const CardListContainer = () => {
  return (
    <>
      <Title>보유카드</Title>
      <Main>
        <CardList cards={CARDS} />
        <AddCardButton />
      </Main>
    </>
  );
};

const Title = styled.h1`
  position: relative;
  font-size: 16px;
  font-weight: normal;
  color: #383838;
`;

const Main = styled.main`
  margin: auto;
`;

export default CardListContainer;
