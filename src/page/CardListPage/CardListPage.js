import { useNavigate } from "react-router-dom";

import { CARDS } from "../../../fixtures/cards";

import { Main, Title } from "../../components/style/layout";

import AddCardButton from "../../components/AddCardButton";

import CardList from "../../components/CardList";

const CardListPage = () => {
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

export default CardListPage;
