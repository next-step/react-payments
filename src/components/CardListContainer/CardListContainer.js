import { useNavigate } from "react-router-dom";

import { CARDS } from "../../../fixtures/cards";

import { Main, Title } from "../style/layout";

import AddCardButton from "../AddCardButton";

import CardList from "../CardList";

const CardListContainer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add/card");
  };

  return (
    <>
      <Title>보유카드</Title>
      <Main>
        <CardList cards={CARDS} />
        <AddCardButton onClick={handleClick} />
      </Main>
    </>
  );
};

export default CardListContainer;
